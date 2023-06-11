const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js");

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  usersController.getAllUsers
);

router.get(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  usersController.getUserById
);

router.post("/", verifyToken, checkRole(["admin"]), usersController.createUser);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin"]),
  usersController.updateUser
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin"]),
  usersController.deleteUser
);

module.exports = router;
