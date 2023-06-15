const express = require("express");
const app = express();
const morgan = require("morgan");

// Load environment variables. See .env file for available variables.
// This should be done before loading variables from process.env
require("dotenv").config();

/* 
Morgan configuration that logs the following:
- the request body
- the request params
- the request query
- the time of the request
- the user agent
*/
const morganConfig = morgan(function (tokens, req, res) {
  return [
    JSON.stringify(req.body),
    JSON.stringify(req.params),
    JSON.stringify(req.query),
    tokens.date(req, res, "iso"),
    req.headers["user-agent"],
  ].join(" ");
});

// Middlewares
app.use(express.json());
app.use(morganConfig);

const sequelize = require("./config/db.config.js");

const usersRoutes = require("./routes/users.route.js");
const projectsRoutes = require("./routes/projects.route.js");
const tasksRoutes = require("./routes/tasks.route.js");
const authRoutes = require("./routes/auth.route.js");

// Routes
app.use("/users", usersRoutes);
app.use("/projects", projectsRoutes);
app.use("/tasks", tasksRoutes);
app.use("/auth", authRoutes);

// Start the server
console.log(process.env.PORT, '_______')
const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`🚀 Server running on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
