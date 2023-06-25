const express = require("express");
const router = express.Router();
const likesController = require("../controllers/likes.controller.js");

router.get("/:tweetId/likes", likesController.getAllTweetLikes);
router.post("/:tweetId/likes", likesController.createTweetLike);
router.delete("/likes/:id", likesController.deleteTweetLike);

module.exports = router;
