const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    helperId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "helper",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    approve: {
        type: Boolean,
    }
});


module.exports = mongoose.model("appointments", appointmentSchema);