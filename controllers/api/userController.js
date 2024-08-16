const router = require("express").Router();
const { User } = require("../../models");

function getAllUsers(req, res) {
  User.findAll().then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(400).json(err);
  });
}

// Posts new user email, username, and password to database
function addNewUser(req, res) {
  User.create(req.body)
    .then(data => {
      req.session.save(() => {
        req.session.user_id = data.id;
        req.session.logged_in = true;

        res.status(200).json(data);
      })
    })
    .catch(err => {
      res.status(400).json(err);
    });
}

// When user logs in as an existing user then this route validates user credentials and logs user in if a match is found in the database
function login(req, res) {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if(!user) {
        console.log("no user found");
        res.status(400).json({ message: "Incorrect email or password, please try again" });
        return;
      }

      user.checkPassword(req.body.password)
        .then(pw => {
          if(!pw) {
            console.log("no password match");
            res.status(400).json({ message: "Incorrect email or password, please try again" });
            return;
          }

          req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
      
            res.json({ user: userData, message: "You are now logged in!" });
          });
        })
    })
    .catch(err => {
      res.status(400).json(err);
    });
}

// When user logs out the session is ended
function logout(req, res) {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
}

// Exports
module.exports = { getAllUsers, addNewUser, login, logout };