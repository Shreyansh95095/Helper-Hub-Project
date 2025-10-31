const express = require('express');
const appoin = express.Router();
const appointmentSchema = require('../model/appointmentSchema');
const userSchema = require('../model/userSchema');
const helperSchema = require('../model/helperSchema');
const Notification = require('../model/notificationSchema');

appoin.post('/add', async (req, res) => {
    const { time, date, userId, helperId } = req.body;
    console.log(userId, helperId, time, date)
    // Validate input
    if (!time || !date || !userId || !helperId) {
        return res.status(400).json({
            message: 'Missing required fields: time, date, userId, or helperId.'
        });
    }

    try {
        const [helper, user] = await Promise.all([
            helperSchema.findById(helperId),
            userSchema.findById(userId),
        ]);
        if (!helper || !user) {
            return res.status(404).json({
                message: 'User or helper not found.'
            });
        }
        const appointment = new appointmentSchema({
            time,
            date,
            userId,
            helperId,
        });

        await appointment.save();
        if (helper.appointment) {
            helper.appointment.push(appointment._id);
        } else {
            helper.appointment = [];
            helper.appointment.push(appointment._id);
        }
        if (user.appointments) {
            user.appointments.push(appointment._id);
        } else {
            user.appointments = [];
            user.appointments.push(appointment._id);
        }

        await Promise.all([helper.save(), user.save()]);

        return res.status(201).json({
            message: 'Appointment successfully created.',
            appointment,
        });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: `Error: ${err.message}`,
        });
    }
});

// appoin.post('/approve/:id', async (req, res) => {
//     const { id } = req.params;
//     const { state } = req.body;
//     try {
//         const appointment = await appointmentSchema.findById(id);
//         if (appointment) {
//             appointment.approve = state;
//             await appointment.save();

//             // Create a notification for the user
//             const notificationMessage = state 
//                 ? `Your appointment with ${appointment.helperId.name} has been approved.` 
//                 : `Your appointment with ${appointment.helperId.name} has been rejected.`;

//             const notification = new Notification({
//                 userId: appointment.userId, // The user who made the appointment
//                 message: notificationMessage
//             });

//             await notification.save();

//             return res.status(203).json({
//                 message: state ? 'Appointment approved' : 'Appointment rejected',
//                 appointment
//             });
//         } else {
//             return res.status(500).json({
//                 message: `Error: Appointment not found.`
//             });
//         }
//     } catch (err) {
//         console.log(err.message);
//         return res.status(500).json({
//             message: `Error: ${err.message}`
//         });
//     }
// });

appoin.post('/approve/:id', async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
    try {
        const appointment = await appointmentSchema.findById(id);
        if (appointment) {
            appointment.approve = state;
            await appointment.save();
            return res.status(203).json({
                message: 'Appointment approved',
                appointment
            })
        } else {
            return res.status(500).json({
                message: `Error : ${err.message}`
            })
        }
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: `Error : ${err.message}`
        });
    }
})

appoin.get('/get/:id', async (req, res) => {
    const { id } = req.params;
    console.log("Hello", id);
    try {
        const user = await appointmentSchema.find({ helperId: id }).populate("userId");
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: `Error: ${err.message}`
        });
    }
});

// NOtification

appoin.post('/:appointmentId', async (req, res) => {
    const { appointmentId } = req.params;
    const { state } = req.body; // true for approve, false for reject

    try {
        // Update appointment status
        const appointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { approve: state },
            { new: true }
        );

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found.' });
        }

        // Create a notification for the user
        const notificationMessage = state
            ? `Your appointment on ${appointment.date} at ${appointment.time} has been approved.`
            : `Your appointment on ${appointment.date} at ${appointment.time} has been rejected.`;

        await Notification.create({
            userId: appointment.userId, // Assuming `userId` is a field in the appointment model
            message: notificationMessage,
            isRead: false,
        });

        res.status(200).json({ message: 'Appointment status updated and notification sent.' });
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



module.exports = appoin;
