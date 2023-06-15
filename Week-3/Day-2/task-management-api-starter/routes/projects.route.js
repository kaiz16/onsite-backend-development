const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projects.controller.js");
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js");

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  projectsController.getAllProjects
);

router.get(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  projectsController.getProjectById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "manager"]),
  projectsController.createProject
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  projectsController.updateProject
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  projectsController.deleteProject
);

module.exports = router;
