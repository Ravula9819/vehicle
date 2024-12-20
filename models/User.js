const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
