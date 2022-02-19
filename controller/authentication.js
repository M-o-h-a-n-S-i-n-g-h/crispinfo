const jwt = require("jsonwebtoken");

exports.isSignedIn = (req, res, next) => {
  const tokenHeader = req.headers.authorization.split(" ")[1];
  if (!tokenHeader) {
    return res.status(400).json({
      message: "No token found and access denied",
    });
  } else {
    try {
      const decoded = jwt.verify(tokenHeader, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            message: "Cant validate ",
          });
        }
        req.profile = user;
        next();
      });
    } catch (err) {
      res.status(409).json({
        message: "Something error",
      });
      console.log(err);
    }
  }
};