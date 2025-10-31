const express = require('express')
const helper = express.Router();
const { registerHelper, loginHelper, logoutHelper } = require('../controllers/auth.controller');

// Helpers Back

helper.post('/login', loginHelper);


helper.post('/register', registerHelper);

helper.get('/logout', logoutHelper);


module.exports = helper;
