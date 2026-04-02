const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());


// Import your routes
const prayersRoutes = require("../routes/prayers");
const usersRoutes = require("../routes/users");
app.use("/prayers", prayersRoutes);
app.use("/users", usersRoutes);
app.use("/data", express.static(path.join(__dirname, "../data")));

// Serve the React app for all other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../files(2)/dist/index.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

