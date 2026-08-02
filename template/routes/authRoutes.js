const express = require('express');

const router = express.Router();

const { registerUser, loginUser, forgetPassword, resetPassword } = require('../conrtollers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword);
module.exports = router;