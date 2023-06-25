const Reply = require("../models/Reply.js");

async function getAllTweetReplies(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const sortBy = req.query.sortBy || "created_at";
    const sortOrder = req.query.sortOrder || "DESC";

    // Find all replies with limit, offset, sortBy, and sortOrder by tweet id.
    const replies = await Reply.findAll({
      limit: limit,
      offset: offset,
      order: [[sortBy, sortOrder]],
      where: {
        tweetId: parseInt(req.params.tweetId),
      },
    });

    // Send all replies as response.
    res.json(replies);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createTweetReply(req, res) {
  try {
    // Create reply using data from request body.
    // Request body must contain all required fields defined in Reply model.
    const reply = await Reply.create({
      ...req.body,
      tweetId: parseInt(req.params.tweetId), // Set tweet id from request params.
    });

    // Send created reply as response.
    res.json(reply);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateTweetReply(req, res) {
  try {
    // Update reply using data from request body.
    // Request body must contain all required fields defined in Reply model.
    const reply = await Reply.update(
      {
        ...req.body,
        tweetId: parseInt(req.params.tweetId), // Set tweet id from request params.
      },
      {
        where: {
          id: parseInt(req.params.id),
        },
      }
    );

    // Send updated reply as response.
    res.json(reply);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteTweetReply(req, res) {
  try {
    // Delete reply by id.
    const reply = await Reply.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted reply as response.
    res.json(reply);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllTweetReplies,
  createTweetReply,
  updateTweetReply,
  deleteTweetReply,
};
