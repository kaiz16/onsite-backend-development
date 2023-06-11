const Task = require("../models/Task.js");

async function getAllTasks(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const sortBy = req.query.sortBy || "created_at";
    const sortOrder = req.query.sortOrder || "DESC";

    // If user's role is employee, only return tasks assigned to the employee.
    if (req.user.role === "employee") {
      // Find all tasks assigned to the employee with limit, offset, sortBy, and sortOrder.
      const tasks = await Task.findAll({
        limit: limit,
        offset: offset,
        order: [
          [sortBy, sortOrder],
        ],
        where: {
          employeeId: parseInt(req.user.id),
        },
      });

      // Send all tasks as response.
      return res.json(tasks);
    }

    // Find all tasks with limit, offset, sortBy, and sortOrder.
    const tasks = await Task.findAll({
      limit: limit,
      offset: offset,
      order: [
        [sortBy, sortOrder],
      ],
    });

    // Send all tasks as response.
    res.json(tasks);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function getTaskById(req, res) {
  try {
    // Find task by id.
    const task = await Task.findByPk(parseInt(req.params.id));

    // Send task as response.
    res.json(task);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createTask(req, res) {
  try {
    // Create task using data from request body.
    // Request body must contain all required fields defined in Task model.
    const task = await Task.create(req.body);

    // Send created task as response.
    res.json(task);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateTask(req, res) {
  try {
    // Update task using data from request body.
    // Request body must contain all required fields defined in Task model.
    const task = await Task.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send updated task as response.
    res.json(task);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteTask(req, res) {
  try {
    // Delete task by id.
    // NOTE: Deleting a task will also delete all tasks associated with the task.
    const task = await Task.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted task as response.
    res.json(task);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
