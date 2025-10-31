const generateOTP = require('../utils/otpGenerator.js');
const sendEmail = require('../utils/sendEmail');
const userSchema = require('../model/userSchema');
const path = require('path');

let otpStore = {};

exports.renderPage = (req, res) => {
    res.status(200).json({ message: "OK" });
}

exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP(); 
    console.log(otp);
    const expires = Date.now() + 60 * 1000; //Validate for 60 seconds

    otpStore[email] = {otp, expires};

    const subject = 'Your OTP for Email Verification';
    const message = `Your OTP is: ${otp}. It will expire in next 60 seconds.`;

    try {
        const user = await userSchema.findOne({ email : email });
        if (user) {
            await sendEmail( email, subject, message);
            return res.status(200).json({ status: 'ok', email, otp, error: null})
        }
        else {
            return res.status(404).json({ status: 'failed', message: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'failed', message: 'Error sending email. Please try again.' });
    }
};

exports.verifyOtp = (req, res) => {
    const { email, otp } = req.body;
    const data = otpStore[email];

    if(!data) {
        return res.status(404).json({ status: 'failed', email, error: 'No OTP requested. Please try again.' })
    }

    if(Date.now() > data.expires) { // Fixed property name from expire to expires
        delete otpStore[email];
        return res.status(404).json({ status: 'failed', email, error: 'OTP expired. Please request again.'})
    }

    if(otp === data.otp) {
        delete otpStore[email];
        return res.status(200).json({ status: 'ok', email });
    }

    res.status(404).json({ status: 'failed', email, error: 'Invalid OTP. Please try again.' });
}