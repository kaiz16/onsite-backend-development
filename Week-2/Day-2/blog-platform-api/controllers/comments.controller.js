const Comment = require("../models/Comment.js");

async function getAllBlogComments(req, res) {
  try {
    // Find all comments by blog id.
    const comments = await Comment.findAll({
      where: {
        blogId: parseInt(req.params.id),
      },
    });

    // Send all comments as response.
    res.json(comments);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createBlogComment(req, res) {
  try {
    // Create comment using data from request body.
    // Request body must contain all required fields defined in Comment model.
    const comment = await Comment.create(req.body);

    // Send created comment as response.
    res.json(comment);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateBlogComment(req, res) {
  try {
    // Update comment using data from request body.
    // Request body must contain all required fields defined in comment model.
    const comment = await Comment.update(req.body, {
      where: {
        id: parseInt(req.params.commentId),
      },
    });

    // Send updated comment as response.
    res.json(comment);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteBlogComment(req, res) {
  try {
    // Delete comment by id.
    const comment = await Comment.destroy({
      where: {
        id: parseInt(req.params.commentId),
      },
    });

    // Send deleted comment as response.
    res.json(comment);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllBlogComments,
  createBlogComment,
  updateBlogComment,
  deleteBlogComment,
};
