const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");
const { verifyToken } = require("../middlewares/auth.middleware.js");

router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.post("/register", authController.register);
router.get("/verify", authController.verify);
router.post("/login", authController.login);
router.get("/me", verifyToken, authController.me);

module.exports = router;
