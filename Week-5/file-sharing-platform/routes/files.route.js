const express = require("express");
const router = express.Router();
const filesController = require("../controllers/files.controller.js");
const { verifyToken } = require("../middlewares/auth.middleware.js");

router.get("/", verifyToken, filesController.getAllFiles);
router.get("/:id", verifyToken, filesController.getFileById);
router.post("/", verifyToken, filesController.createFile);
router.put("/:id", verifyToken, filesController.toggleFilePrivacy);
router.delete("/:id", verifyToken, filesController.deleteFile);

module.exports = router;
