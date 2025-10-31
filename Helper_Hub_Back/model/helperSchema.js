const mongoose = require('mongoose');

const helperSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImg : {
        type: String,
        required: true
    },
    appointment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "appointments"
        }
    ]
})

module.exports = mongoose.model("helper", helperSchema);