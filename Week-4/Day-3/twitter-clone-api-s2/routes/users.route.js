const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
