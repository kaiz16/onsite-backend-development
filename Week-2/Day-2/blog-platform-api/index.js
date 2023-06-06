const express = require("express");
const app = express();
// Middleware
app.use(express.json());
const sequelize = require("./config/db.config.js");

const usersRoutes = require("./routes/users.route.js");
const blogsRoutes = require("./routes/blogs.route.js");
const commentsRoutes = require("./routes/comments.route.js");

// Routes
app.use("/users", usersRoutes);
app.use("/blogs", blogsRoutes);
app.use("/blogs", commentsRoutes);

// Start the server
const port = 3000;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`🚀 Server running on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
