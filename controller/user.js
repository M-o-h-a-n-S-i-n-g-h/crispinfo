const User = require("../models/user");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

//!SIGNUP

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(409).json({
      error: errors.array()[0].msg,
    });
  }
  await User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(400).json({
          error: "Mail already exists",
        });
      }
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(400).json({
            message: err,
          });
        }
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        user.save((err, newUser) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              error: err,
            });
          }
          const { name, email, _id } = newUser;
          return res.status(200).json({
            message: "User saved successfully",
            newUser: {
              id: _id,
              name: name,
              email: email,
            },
          });
        });
      });
    });
};

//!LOGIN

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  const { email } = req.body;
  await User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({
        error: "No user found probably you should signup",
      });
    }
    if (user) {
      const { name, password, _id, email, role } = user;
      bcrypt.compare(req.body.password, password).then((result) => {
        if (result) {
          const token = jwt.sign(
            {
              id: _id,
            },
            process.env.JWT_SECRET
          );
          res.cookie("token", token, { expire: new Date() + 9999 });
          return res.json({
            token,
            user: { _id, email, name, role },
          });
        }
        return res.json({
          error: "Please enter your correct credentials",
        });
      });
    }
  });
};

exports.signout = async (req, res) => {
  res.clearCookie("token");
  console.log("User signed out");
  return res.status(200).json({
    message: "User signed out successfully",
  });
};

exports.getUsers = async (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        message: "Error something",
      });
    }
    return res.json(users);
  });
};
