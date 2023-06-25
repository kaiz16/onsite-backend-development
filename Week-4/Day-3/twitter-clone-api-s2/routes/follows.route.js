const express = require("express");
const router = express.Router();
const followsController = require("../controllers/follows.controller.js");

router.get("/:userId/followers", followsController.getAllUserFollowers);
router.get("/:userId/followings", followsController.getAllUserFollowings);
router.post("/:userId/follow", followsController.createUserFollow);
router.delete("/follow/:id", followsController.deleteUserFollow);

module.exports = router;
