const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })
        await transporter.sendMail({
            from: 'shreyansh0142@gmail.com',
            to,
            subject,
            text
        })
        console.log(`email sent to ${to}`);
    }
    catch(err) {
        console.error('Error sending email', err);
        throw err;
    }
};

module.exports = sendEmail;