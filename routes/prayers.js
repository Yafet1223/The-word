
// Prayer Wall
// POST /prayers
// GET /prayers
// POST /prayers/:id/respond
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const prayersFile = path.join(__dirname, "../data", "prayers.json");

// Get all prayers
router.get("/", (req, res) => {
    fs.readFile(prayersFile, "utf-8", (err, data) => {
        if (err) return res.status(500).send("Error reading prayers");
        res.json(JSON.parse(data || "[]"));
    });
});

// Add a new prayer
router.post("/", (req, res) => {
    const newPrayer = req.body;

    fs.readFile(prayersFile, "utf-8", (err, data) => {
        let prayers = JSON.parse(data || "[]");

        newPrayer.id = prayers.length + 1;
        newPrayer.responses = [];
        newPrayer.timestamp = Date.now();
        prayers.push(newPrayer);

        fs.writeFile(prayersFile, JSON.stringify(prayers, null, 2), (err) => {
            if (err) return res.status(500).send("Error saving prayer");
            res.status(201).send("Prayer added");
        });
    });
});

// Add a response to a prayer
router.post("/:id/respond", (req, res) => {
    const prayerId = parseInt(req.params.id);
    const { text } = req.body;

    if (!text) return res.status(400).json({ error: "Response text is required" });

    fs.readFile(prayersFile, "utf-8", (err, data) => {
        if (err) return res.status(500).json({ error: "Could not read prayers data" });

        let prayers = JSON.parse(data || "[]");

        const prayer = prayers.find(p => p.id === prayerId);
        if (!prayer) return res.status(404).json({ error: "Prayer not found" });

        prayer.responses.push({ text, timestamp: Date.now() });

        fs.writeFile(prayersFile, JSON.stringify(prayers, null, 2), err => {
            if (err) return res.status(500).json({ error: "Could not save response" });

            res.status(201).json({ message: "Response added", prayer });
        });
    });
});

module.exports = router;