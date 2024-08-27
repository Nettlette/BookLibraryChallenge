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
  // console.log(req.body);
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      console.log(user);
      if(!user) {
        console.log("no user found");
        res.status(400).json({ message: "Incorrect email or password, please try again" });
        return;
      }
      // console.log('check pw');
      const pw = user.checkPassword(req.body.password);
      // console.log(pw);
      if(pw) {
        req.session.save(() => {
          req.session.user_id = user.id;
          req.session.logged_in = true;
          req.session.username = user.firstName;
          console.log(req.session);

          res.json({ user: user, message: "You are now logged in!" });
        });
      } else {
        console.log("no password match");
            res.status(400).json({ message: "Incorrect email or password, please try again" });
            return;
      }
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