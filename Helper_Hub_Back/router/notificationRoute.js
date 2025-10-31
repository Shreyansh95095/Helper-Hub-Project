const express = require('express');
const notification = express.Router();
const notificationSchema = require('../model/notificationSchema');;

// Route to get notifications for a specific user
// notification.get('/:userId', async (req, res) => {
//     const { userId } = req.params;
//     try {
//         const notifications = await notificationSchema.find({ userId })
//             .sort({ date: -1 })  // Latest notifications first
//             .limit(20);  // Fetch the latest 20 notifications

//         res.status(200).json({ notifications });
//     } catch (err) {
//         console.error(err.message);
//         return res.status(500).json({
//             message: `Error fetching notifications: ${err.message}`
//         });
//     }
// });

// Route to mark a notification as read
notification.post('/:notificationId', async (req, res) => {
    const { notificationId } = req.params;

    try {
        const notification = await notificationSchema.findById(notificationId);
        if (notification) {
            notification.isRead = true;
            await notification.save();
            res.status(200).json({ message: 'Notification marked as read' });
        } else {
            res.status(404).json({ message: 'Notification not found' });
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: `Error marking notification as read: ${err.message}`
        });
    }
});

notification.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        // Query the database for notifications belonging to the user
        const notifications = await Notification.find({ userId });

        if (!notifications.length) {
            return res.status(404).json({ message: 'No notifications found for this user.' });
        }

        res.status(200).json({ notifications });
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = notification;