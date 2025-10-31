const express = require('express');
const app = express();
const mongoose = require('mongoose')
const useRouter = require('./router/userRouter');
const helperRouter = require('./router/helperRouter');
const otpRouter = require('./router/otpRouter');
const appointmentRouter = require('./router/appointmentRouter')
const notificationRoute = require('./router/notificationRoute')
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config();

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected")
}
connectDb();
app.use(cors({ origin: '*', credentials: true }))
app.use(cookieParser());
app.use(express.json())


app.use('/u', useRouter);
app.use('/h', helperRouter);
app.use('/otp', otpRouter);
app.use('/notification', notificationRoute);
app.use('/appointments', appointmentRouter);
// app.use('/notifications', notificationRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`)
});
 