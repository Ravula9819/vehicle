const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to register a user
router.post('/register', async (req, res) => {
    const { name, phoneNumber, password } = req.body;
    const user = new User({ name, phoneNumber, password });
    await user.save();
    res.status(201).send('User registered');
});

module.exports = router;
