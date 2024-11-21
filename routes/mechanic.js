const express = require('express');
const router = express.Router();
const Mechanic = require('../models/Mechanic');

// Route to list all available mechanics
router.get('/available', async (req, res) => {
    const mechanics = await Mechanic.find({ availability: true });
    res.json(mechanics);
});

module.exports = router;
