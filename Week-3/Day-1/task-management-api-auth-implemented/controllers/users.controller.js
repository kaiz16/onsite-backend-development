const User = require("../models/User.js");

async function getAllUsers(req, res) {
  try {
    // Check if user's role is employee.
    if (req.user.role === "employee") {
      // If user's role is employee, redirect to get user by id route.
      return res.redirect(`/users/${req.user.id}`);
    }

    // Find all users.
    const users = await User.findAll();

    // Send all users as response.
    res.json(users);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function getUserById(req, res) {
  try {
    // Check if user's role is employee.
    if (req.user.role === "employee") {
      // Check if user's id is the same as the id in the request parameters.
      if (req.user.id !== parseInt(req.params.id)) {
        // If user's id is not the same as the id in the request parameters, return error.
        throw "Access denied.";
      }
    }

    // Find user by id.
    const user = await User.findByPk(parseInt(req.params.id));

    // Send user as response.
    res.json(user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createUser(req, res) {
  try {
    // Create user using data from request body.
    // Request body must contain all required fields defined in User model.
    const user = await User.create(req.body);

    // Send created user as response.
    res.json(user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateUser(req, res) {
  try {
    // Update user using data from request body.
    // Request body must contain all required fields defined in User model.
    const user = await User.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send updated user as response.
    res.json(user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteUser(req, res) {
  try {
    // Delete user by id.
    // NOTE: Deleting a user will also delete all projects & tasks associated with the user.
    const user = await User.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted user as response.
    res.json(user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
