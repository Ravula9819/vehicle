const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const fs = require('fs');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Log public directory contents for debugging
console.log('Public Directory Contents:', fs.readdirSync(path.join(__dirname, 'public')));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/mechanic', require('./routes/mechanic'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Force redirect to login.html when accessing '/'
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'login.html');
    
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('login.html not found');
    }
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
