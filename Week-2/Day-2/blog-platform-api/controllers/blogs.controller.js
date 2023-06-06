const Blog = require("../models/Blog.js");

async function getAllBlogs(req, res) {
  try {
    // Find all blogs.
    const blogs = await Blog.findAll();

    // Send all blogs as response.
    res.json(blogs);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function getBlogById(req, res) {
  try {
    // Find blog by id.
    const blog = await Blog.findByPk(parseInt(req.params.id));

    // Send blog as response.
    res.json(blog);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createBlog(req, res) {
  try {
    // Create blog using data from request body.
    // Request body must contain all required fields defined in Blog model.
    const blog = await Blog.create(req.body);

    // Send created blog as response.
    res.json(blog);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateBlog(req, res) {
  try {
    // Update blog using data from request body.
    // Request body must contain all required fields defined in Blog model.
    const blog = await Blog.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send updated blog as response.
    res.json(blog);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteBlog(req, res) {
  try {
    // Delete blog by id.
    // NOTE: Deleting a blog will also delete all blogs associated with the blog.
    const blog = await Blog.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted blog as response.
    res.json(blog);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
