const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import your routes
const prayersRoutes = require("../routes/prayers");
app.use("/prayers", prayersRoutes);

// Serve the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});