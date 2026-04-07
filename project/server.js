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

// Serve stitch static files:
app.use(express.static(path.join(__dirname, '../stitch')));

// SPA fallback to stitch/code.html for frontend paths
app.use((req, res, next) => {
  const pathUrl = req.path;
  if (pathUrl.startsWith('/prayers') || pathUrl.startsWith('/users') || pathUrl.startsWith('/data')) {
    return next();
  }
  res.sendFile(path.join(__dirname, '../stitch/code.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const jwt = require("jsonwebtoken");

const SECRET = "supersecretkey";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send("No token");

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // { userId }
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
}

module.exports = authMiddleware;