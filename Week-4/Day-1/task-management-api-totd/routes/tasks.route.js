const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks.controller.js");
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js");

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  tasksController.getAllTasks
);

router.get(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  tasksController.getTaskById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "manager"]),
  tasksController.createTask
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  tasksController.updateTask
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  tasksController.deleteTask
);

module.exports = router;
