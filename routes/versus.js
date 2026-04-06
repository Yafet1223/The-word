// Manage Bible verses + reflections

// So:

// Create verse posts
// Fetch verse posts
// Link every verse to a real user
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const versesFile = path.join(__dirname, "../data/versus.json");
const usersFile = path.join(__dirname, "../data/users.json");

// GET all verses
router.get("/", (req, res) => {
  fs.readFile(versesFile, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading verses");

    res.json(JSON.parse(data || "[]"));
  });
});

// GET single verse
router.get("/:id", (req, res) => {
  const verseId = parseInt(req.params.id);

  fs.readFile(versesFile, "utf-8", (err, data) => {
    let verses = JSON.parse(data || "[]");

    const verse = verses.find(v => v.id === verseId);
    if (!verse) return res.status(404).send("Verse not found");

    res.json(verse);
  });
});

// POST new verse
router.post("/", (req, res) => {
  const { userId, verse, reflection } = req.body;

  if (!userId || !verse || !reflection) {
    return res.status(400).send("userId, verse, and reflection are required");
  }

  // validate user exists
  fs.readFile(usersFile, "utf-8", (err, userData) => {
    if (err) return res.status(500).send("Error reading users");

    let users = JSON.parse(userData || "[]");

    const userExists = users.find(u => u.id === userId);
    if (!userExists) {
      return res.status(400).send("User does not exist");
    }

    // read verses
    fs.readFile(versesFile, "utf-8", (err, data) => {
      let verses = JSON.parse(data || "[]");

      const newVerse = {
        id: verses.length + 1,
        userId,
        verse,
        reflection,
        timestamp: Date.now()
      };

      verses.push(newVerse);

      fs.writeFile(versesFile, JSON.stringify(verses, null, 2), err => {
        if (err) return res.status(500).send("Error saving verse");

        res.status(201).json(newVerse);
      });
    });
  });
});

module.exports = router;
