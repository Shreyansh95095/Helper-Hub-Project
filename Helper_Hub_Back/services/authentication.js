const jwt = require('jsonwebtoken');

const secretKey = 'Secret@45';

function generateTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role
    };

    const token = jwt.sign(payload, secretKey);
    return token;
};

function validateToken(token) {
    const payload = jwt.verify(token, secretKey);
    return payload;
};

module.exports = {
    generateTokenForUser,
    validateToken
}