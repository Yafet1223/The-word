try {
  const usersRoutes = require("./routes/users");
  console.log("Users routes loaded successfully");
  console.log(typeof usersRoutes);
} catch (error) {
  console.error("Error loading users routes:", error);
}