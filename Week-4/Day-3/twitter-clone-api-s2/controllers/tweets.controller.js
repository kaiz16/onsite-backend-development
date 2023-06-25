const Tweet = require("../models/Tweet.js");

async function getAllTweets(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const sortBy = req.query.sortBy || "created_at";
    const sortOrder = req.query.sortOrder || "DESC";

    // Find all tweets with limit, offset, sortBy, and sortOrder.
    const tweets = await Tweet.findAll({
      limit: limit,
      offset: offset,
      order: [[sortBy, sortOrder]],
    });

    // Send all tweets as response.
    res.json(tweets);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function getTweetById(req, res) {
  try {
    // Find tweet by id.
    const tweet = await Tweet.findByPk(parseInt(req.params.id));

    // Send tweet as response.
    res.json(tweet);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createTweet(req, res) {
  try {
    // Create tweet using data from request body.
    // Request body must contain all required fields defined in Tweet model.
    const tweet = await Tweet.create({
      ...req.body,
    });

    // Send created tweet as response.
    res.json(tweet);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateTweet(req, res) {
  try {
    // Update tweet using data from request body.
    // Request body must contain all required fields defined in Tweet model.
    const tweet = await Tweet.update(
      {
        ...req.body,
      },
      {
        where: {
          id: parseInt(req.params.id),
        },
      }
    );

    // Send updated tweet as response.
    res.json(tweet);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteTweet(req, res) {
  try {
    // Delete tweet by id.
    // NOTE: Deleting a tweet will also delete all likes, replies associated with the tweet.
    const tweet = await Tweet.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted tweet as response.
    res.json(tweet);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllTweets,
  getTweetById,
  createTweet,
  updateTweet,
  deleteTweet,
};
