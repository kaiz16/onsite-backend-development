const express = require("express");
const router = express.Router();
const tweetsController = require("../controllers/tweets.controller.js");

router.get("/", tweetsController.getAllTweets);
router.get("/:id", tweetsController.getTweetById);
router.post("/", tweetsController.createTweet);
router.put("/:id", tweetsController.updateTweet);
router.delete("/:id", tweetsController.deleteTweet);

module.exports = router;
