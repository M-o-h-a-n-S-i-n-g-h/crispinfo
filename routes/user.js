const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, login, signout, getUsers } = require("../controller/user");

router.post(
  "/user/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name should be atleast 3 characters"),

    check(
      "email",
      "Email is required to signup,Please chech you have entered valid email"
    ).isEmail(),

    check("password")
      .isLength({ min: 5 })
      .withMessage("Password should be atleast 5 characters long"),
  ],

  signup
);
router.post(
  "/user/login",
  [
    check("email", "Email is required to login").isEmail(),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password didn't match your mail ID"),
  ],
  login
);
router.get("/user/logout", signout);
router.get("/users", getUsers);

module.exports = router;
