const router = require('express').Router();
const { getAllUsers, addNewUser, login, logout } = require('../../controllers/api/userController');

// The `/api/user` endpoint

router.route('/').get(getAllUsers).post(addNewUser);

router.route('/login').post(login);

router.route('/logout').post(logout);

module.exports = router;
