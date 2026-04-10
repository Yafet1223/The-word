const express = require("express");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

const usersFile = path.join(__dirname, "../data/users.json");
const SECRET = "supersecretkey"; // later use env

// SIGN UP
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send("Name, email and password required");
    }

    fs.readFile(usersFile, "utf-8", async (err, data) => {
        let users = JSON.parse(data || "[]");

        // check if user exists
        if (users.find(u => u.email === email || u.name === name)) {
            return res.status(400).send("User with this email or name already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: users.length + 1,
            name,
            email,
            password: hashedPassword,
            createdAt: Date.now()
        };

        users.push(newUser);

        fs.writeFile(usersFile, JSON.stringify(users, null, 2), err => {
            if (err) return res.status(500).send("Error saving user");

            res.status(201).send("User created");
        });
    });
});

// LOGIN
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password required");
    }

    fs.readFile(usersFile, "utf-8", async (err, data) => {
        let users = JSON.parse(data || "[]");

        const user = users.find(u => u.email === email);
        if (!user) return res.status(400).send("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Wrong password");

        const token = jwt.sign(
            { userId: user.id },
            SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });
    });
});

module.exports = router;