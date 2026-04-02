// 1️⃣ Create user
// POST /users
// 2️⃣ Get all users
// GET /users
// 3️⃣ (Optional but smart) Get single user
// GET /users/:id
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const usersFile = path.join(__dirname, "../data/users.json");

// GET all users
router.get("/", (req, res) => {
  fs.readFile(usersFile, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading users");
    res.json(JSON.parse(data || "[]"));
  });
});

// GET single user
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  fs.readFile(usersFile, "utf-8", (err, data) => {
    let users = JSON.parse(data || "[]");

    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).send("User not found");

    res.json(user);
  });
});

// POST create user
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).send("Name is required");

  fs.readFile(usersFile, "utf-8", (err, data) => {
    let users = JSON.parse(data || "[]");

    const newUser = {
      id: users.length + 1,
      name,
      createdAt: Date.now()
    };

    users.push(newUser);

    fs.writeFile(usersFile, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).send("Error saving user");
      res.status(201).json(newUser);
    });
  });
});

module.exports = router;