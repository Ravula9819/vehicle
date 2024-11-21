const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/vehicle-breakdown', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
