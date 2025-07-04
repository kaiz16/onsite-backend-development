const User = require("../models/User.js");
const { hashPassword } = require("../utils/bcrypt.util.js");

async function getAllUsers(req, res) {
  try {
    // Check if user's role is employee.
    if (req.user.role === "employee") {
      // If user's role is employee, redirect to get user by id route.
      return res.redirect(`/users/${req.user.id}`);
    }

    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const sortBy = req.query.sortBy || "created_at";
    const sortOrder = req.query.sortOrder || "DESC";

    // Find all users with limit, offset, sortBy, and sortOrder.
    const users = await User.findAll({
      limit: limit,
      offset: offset,
      order: [
        [sortBy, sortOrder],
      ],
    });

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
    const hashedPassword = hashPassword(req.body.password);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

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
    const hashedPassword = hashPassword(req.body.password);
    const user = await User.update(
      {
        ...req.body,
        password: hashedPassword,
      },
      {
        where: {
          id: parseInt(req.params.id),
        },
      }
    );

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
