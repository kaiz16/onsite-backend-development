const Like = require("../models/Like.js");

async function getAllTweetLikes(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const sortBy = req.query.sortBy || "created_at";
    const sortOrder = req.query.sortOrder || "DESC";

    // Find all likes with limit, offset, sortBy, and sortOrder by tweet id.
    const likes = await Like.findAll({
      limit: limit,
      offset: offset,
      order: [[sortBy, sortOrder]],
      where: {
        tweetId: parseInt(req.params.tweetId),
      },
    });

    // Send all likes as response.
    res.json(likes);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createTweetLike(req, res) {
  try {
    // Create like using data from request body.
    // Request body must contain all required fields defined in Like model.
    const like = await Like.create({
      ...req.body,
      tweetId: parseInt(req.params.tweetId), // Set tweet id from request params.
    });

    // Send created like as response.
    res.json(like);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteTweetLike(req, res) {
  try {
    // Delete like by id.
    const like = await Like.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted like as response.
    res.json(like);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllTweetLikes,
  createTweetLike,
  deleteTweetLike,
};
