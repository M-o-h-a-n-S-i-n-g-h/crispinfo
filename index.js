const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const blogRoutes = require("./routes/blog");
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");
const path = require("path");

mongoose
  .connect(process.env.DATABASEID, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("NOT CONNECTED");
    console.log(err);
  });
mongoose.set("useCreateIndex", true);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

//!ROUTES
app.use("/api", userRoutes);
app.use("/api", blogRoutes);
app.use("/api", categoryRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
