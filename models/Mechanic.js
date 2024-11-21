const mongoose = require('mongoose');

const mechanicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    availability: { type: Boolean, default: true },
    location: { type: String, required: true },
});

const Mechanic = mongoose.model('Mechanic', mechanicSchema);

module.exports = Mechanic;
