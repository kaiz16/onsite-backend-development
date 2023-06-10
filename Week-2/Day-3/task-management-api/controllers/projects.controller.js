const Project = require("../models/Project.js");

async function getAllProjects(req, res) {
  try {
    // Find all projects.
    const projects = await Project.findAll();

    // Send all projects as response.
    res.json(projects);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function getProjectById(req, res) {
  try {
    // Find project by id.
    const project = await Project.findByPk(parseInt(req.params.id));

    // Send project as response.
    res.json(project);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function createProject(req, res) {
  try {
    // Create project using data from request body.
    // Request body must contain all required fields defined in Project model.
    const project = await Project.create(req.body);

    // Send created project as response.
    res.json(project);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function updateProject(req, res) {
  try {
    // Update project using data from request body.
    // Request body must contain all required fields defined in Project model.
    const project = await Project.update(req.body, {
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send updated project as response.
    res.json(project);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function deleteProject(req, res) {
  try {
    // Delete project by id.
    // NOTE: Deleting a project will also delete all projects associated with the project.
    const project = await Project.destroy({
      where: {
        id: parseInt(req.params.id),
      },
    });

    // Send deleted project as response.
    res.json(project);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
