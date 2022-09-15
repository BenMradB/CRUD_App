const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User Name Field Must Have A Value ...']
    },
    email: {
        type: String,
        required: [true, 'Type Your Email Please ...'],
        unique: [true, 'There Is An Account Under That Email ...'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Type Your Password Please ...'],
        min: [8, 'Minimum Length For The Password Is 8']
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);