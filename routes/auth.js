// backend/routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");
require("dotenv").config();

const router = express.Router();

// REGISTER
router.post("/register", (req, res) => {
    const { username, password } = req.body;

    // 1. Check if user exists
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length > 0) return res.status(400).json({ message: "User already exists" });

        // 2. Hash password
        const hashedPassword = bcrypt.hashSync(password, 8);

        // 3. Save user
        db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "User registered successfully" });
        });
    });
});

// LOGIN
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length === 0) return res.status(400).json({ message: "User not found" });

        const user = result[0];

        // Check password
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).json({ message: "Wrong password" });

        // Create JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    });
});

module.exports = router;
