const { createHmac, randomBytes } = require('crypto');
const mongoose = require('mongoose');
const { generateTokenForUser } = require('../services/authentication');

const userSchema = mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['ADMIN', 'USER'], 
        default: 'USER' 
    },
    password: { 
        type: String, 
        required: true 
    },
    profileImg : {
        type: String,
        required: true
    },
    appointments: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "appointments" 
        }
    ],
    phone: String,
    location: String,
    gender: String,
    address: String,
    salt: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
