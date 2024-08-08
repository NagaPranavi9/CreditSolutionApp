const User = require('../models/userModel');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password, pan, aadhar, mobile } = req.body;

        const user = new User({ username, email, password, pan, aadhar, mobile });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};