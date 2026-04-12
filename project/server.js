const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());


// Import your routes
const prayersRoutes = require("../routes/prayers");
const usersRoutes = require("../routes/users");
const authRoutes = require("../auth/auth");

app.use("/prayers", prayersRoutes);
app.use("/users", usersRoutes);
app.use("/auth", authRoutes);
app.use("/data", express.static(path.join(__dirname, "../data")));

const { spawn } = require("child_process");

app.post("/ai/ask", (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ error: "No prompt provided" });

  const pyPath = path.join(__dirname, "../AI/ask.py");
  const cwdPath = path.join(__dirname, "../AI");
  
  const pyProc = spawn("python", [pyPath, prompt], { cwd: cwdPath });

  let dataString = "";

  pyProc.stdout.on("data", (data) => {
      dataString += data.toString();
  });

  pyProc.on("close", (code) => {
      try {
          const result = JSON.parse(dataString);
          if (result.success) {
              res.json({ response: result.response });
          } else {
              res.status(500).json({ error: result.error });
          }
      } catch (e) {
          console.error("Failed to parse Python output. Raw Output:", dataString);
          res.status(500).json({ error: "Failed to connect to Gemini AI. Rate Limit likely reached." });
      }
  });
});

// Serve stitch static files:
app.use(express.static(path.join(__dirname, '../stitch')));

// SPA fallback to stitch/code.html for frontend paths
app.use((req, res, next) => {
  const pathUrl = req.path;
  if (pathUrl.startsWith('/prayers') || pathUrl.startsWith('/users') || pathUrl.startsWith('/data') || pathUrl.startsWith('/auth')) {
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