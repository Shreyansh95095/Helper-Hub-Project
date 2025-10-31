const User = require('../model/userSchema');
const helperSchema = require('../model/helperSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function registerUser( req, res ) {
    const { email, name, password } = req.body;

    const ifUserExists = await User.findOne({ email });

    if (ifUserExists) {
        return res.statue(400),json({
            message: 'User already exists',
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email, 
        name,
        password: hashedPassword,
    });

    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    return res.status(201).json({
        message: 'User registered successfully',
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            role: user,
        }
    })
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if ( !user ) {
        return res.status(400).json({
            message: 'Invalid Email or Password'
        })
    }

    const isPasswordValid = await bcrypt.compare( password, user.password );

    if ( !isPasswordValid ) {
        return res.status(400).json({
            message: 'Invalid Email or Password'
        })
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    return res.status(200).json({
        message: 'User logged in successfully',
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
        }
    })
}

function logoutUser( req, res ) {
    res.clearCookie('token');
    res.status(200).json({
        message: 'User logged out successfully'
    })
}


async function registerHelper( req, res ) {
    const { email, name, password } = req.body;

    const ifUserExists = await helperSchema.findOne({ email });

    if (ifUserExists) {
        return res.statue(400),json({
            message: 'User already exists',
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await helperSchema.create({
        email, 
        name,
        password: hashedPassword,
    });

    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    return res.status(201).json({
        message: 'User registered successfully',
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            role: user,
        }
    })
}

async function loginHelper(req, res) {
    const { email, password } = req.body;

    const user = await helperSchema.findOne({ email });

    if ( !user ) {
        return res.status(400).json({
            message: 'Invalid Email or Password'
        })
    }

    const isPasswordValid = await bcrypt.compare( password, user.password );

    if ( !isPasswordValid ) {
        return res.status(400).json({
            message: 'Invalid Email or Password'
        })
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET);

    res.cookie('token', token);

    return res.status(200).json({
        message: 'Helper logged in successfully',
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
        }
    })
}

function logoutHelper( req, res ) {
    res.clearCookie('token');
    res.status(200).json({
        message: 'User logged out successfully'
    })
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerHelper,
    loginHelper,
    logoutHelper,
}