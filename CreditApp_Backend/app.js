require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./src/routes/userRoutes');
const creditRoutes = require('./src/routes/creditRoutes');

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/credit', creditRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Database connection error:', err);
});

module.exports = app;