const User = require('../models/user');
const { sendEmail, emailContent } = require('../utils/emailService');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
    const { name, username, email, password,role } = req.body;
    try {
        //check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if(existingUser) {
            return res.status(400).json({ message: 'User with this email or username already exists' });
        }
        //check if username is unique
        const existingUsername = await User.findOne({ username });
        if(existingUsername) {
            return res.status(400).json({ message: 'Username already taken' });
        }
        const user = new User({ name, username, email, password,role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = user.createLoginToken();
        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// forget password
exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    console.log('Forget password request received for email:', email);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const resetToken = user.createResetPasswordToken();
        await user.save();
        await sendEmail(user.email, 'Password Reset', emailContent(resetToken));
        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//reset password
exports.resetPassword = async (req, res) => {
    const { resetToken, newPassword } = req.body;
    try {
        const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        if (!user.isResetTokenValid(resetToken)) {
            return res.status(400).json({ message: 'Invalid or expired reset token' });
        }
        user.password = newPassword;
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
