const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
        type: String,
        default: null
    },
    resetPasswordExpires: {
        type: Date,
        default: null
    },
    role: {
        type: String, 
        enum: ['user', 'expert', 'admin'],
        default: 'user'
    }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return;
    }
    
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        
    
});

// compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

// create login token method
userSchema.methods.createLoginToken = function() {
    const token = jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    return token;
}

//create reset password token method
userSchema.methods.createResetPasswordToken = function() {
    const resetToken = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN
    });
    this.resetPasswordToken = resetToken;
    this.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    return resetToken;
}

// check if resetToken is valid
userSchema.methods.isResetTokenValid = function(token) {
    if (this.resetPasswordToken !== token) {
        return false;
    }
    if (this.resetPasswordExpires < Date.now()) {
        return false;
    }
    return true;
}


module.exports = mongoose.model('User', userSchema);