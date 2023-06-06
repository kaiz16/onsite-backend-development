const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments.controller.js");

router.get("/:id/comments", commentsController.getAllBlogComments);
router.post("/:id/comments", commentsController.createBlogComment);
router.put("/:id/comments/:commentId", commentsController.updateBlogComment);
router.delete("/:id/comments/:commentId", commentsController.deleteBlogComment);

module.exports = router;
