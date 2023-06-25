const express = require("express");
const router = express.Router();
const repliesController = require("../controllers/replies.controller.js");

router.get("/:tweetId/replies", repliesController.getAllTweetReplies);
router.post("/:tweetId/replies", repliesController.createTweetReply);
router.put("/:tweetId/replies/:id", repliesController.updateTweetReply);
router.delete("/replies/:id", repliesController.deleteTweetReply);

module.exports = router;
