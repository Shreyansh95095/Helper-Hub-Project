const express = require('express');
const user = express.Router();
const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');
const { createHmac } = require('crypto');
const { registerUser, loginUser, logoutUser } = require('../controllers/auth.controller');
const { handleUpdateUserDetails } = require('../controllers/user.controller');
const { uploadFile } = require('../services/storage.service');

const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})

user.post('/register',  registerUser );

user.post('/login', loginUser);

user.get('/logout', logoutUser);

// Get User Details
user.get('/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await userSchema.findOne({ email });
        console.log(user);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});


// Update User Details
user.post('/update-details', 
    upload.single("video"),
    handleUpdateUserDetails
);

// Reset Password
user.post('/reset-password', async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
            return res.status(400).json({
                status: 'failed',
                message: 'Email and new password are required'
            });
        }

        const user = await userSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: 'User not found'
            });
        }

        // Check if new password is same as old password using the same hashing method
        const userProvidedHash = createHmac('sha256', user.salt)
            .update(newPassword)
            .digest('hex');

        if (user.password === userProvidedHash) {
            return res.status(400).json({
                status: 'failed',
                message: 'New password cannot be the same as the old password'
            });
        }

        //Hash the newPassword
        const hashedNwePassword = await bcrypt.hash(newPassword, 10);

        // Set the new password (the pre-save hook will hash it and generate new salt)
        user.password = hashedNwePassword; // This will trigger new salt generation in pre-save hook
        await user.save();

        res.json({
            status: 'ok',
            message: 'Password reset successfully'
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: 'failed',
            message: 'Failed to reset password',
            error: error.message
        });
    }
});

module.exports = user;