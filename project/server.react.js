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

// Serve React static files after build
app.use(express.static(path.join(__dirname, "../files(2)/dist")));

// For any route not handled by API, serve React index.html
app.use((req, res, next) => {
  if (
    req.path.startsWith('/prayers') ||
    req.path.startsWith('/users') ||
    req.path.startsWith('/data')
  ) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../files(2)/dist', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
