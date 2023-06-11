### Task Management API

This is a Task Management API application built using Node.js, Express.js, and Sequelize ORM. It is a REST API for a task management system that allows users to create projects and tasks, and assign tasks to projects.

### Overview

There are three user roles in the system: admin, manager, and employee.

**Users entity**:

- Users can have one of the three roles: admin, manager, or employee.
- Users have a name, email, and role attributes.

**Projects entity**:

- Projects have a title, description, start date, due date, a boolean to indicate if the project is completed, and a manager_id attribute to indicate the manager of the project.
- Projects can have multiple tasks associated with them.

**Tasks entity**:

- Tasks have a title, description, start date, due date, a boolean to indicate if the task is completed, a project_id attribute to indicate the project the task belongs to, and an employee_id attribute to indicate the employee assigned to the task.

### Project Structure

```
├── config                       # Configuration files
│   ├── db.config.js                # Database configuration
├── controllers                  # Controllers
│   ├── project.controller.js       # Projects controller
│   ├── tasks.controller.js         # Tasks controller
│   └── users.controller.js         # Users controller
├── db                           # Database related files
│   └── migrations.sql              # Database migrations
├── index.js                     # App entry point
├── models                       # Models
│   ├── Project.js                  # Project model
│   ├── Task.js                     # Task model
│   └── User.js                     # User model
└── routes                       # Routes
    ├── project.route.js            # Projects routes
    ├── tasks.route.js              # Tasks routes
    └── user.route.js               # Users routes
```

### Setting up the Application

This application uses MySQL database to store the data. You can use the `migrations.sql` file to create the required database and tables. By default, this app tries to connect to the database on `localhost` with the username `root` and password `sigma12345`. You can change these settings by editing the `config/db.config.js` file.

1. Setting up the database

   ```bash
   docker run --name=mysql-local-server -p 3306:3306 -e MYSQL_ROOT_PASSWORD=sigma12345 -d mysql:8.0
   ```

   Note: you might need to use sudo depending on your platform.

2. Follow the instructions in the `migrations.sql` file to create the database and tables.

3. Install dependencies

   ```bash
   npm install
   ```

4. Run the application

   ```bash
   nodemon index.js
   ```

   Use node index.js if you don't have nodemon installed.

5. Test the application

   Do whatever you want to do with the application. Perhaps, create a really nice looking frontend for it and integrate it with the API? The sky is the limit!

#### Testing the Routes

Following are the routes available in this application. You can use Postman or Insomnia to test these routes. Alternatively, you may use the `Insomnia_[date].json` file to import the collection into Insomnia and test the routes.

- **GET /users** - Get all users
- **GET /users/:id** - Get a single user
- **POST /users** - Create a new user
- **PUT /users/:id** - Update a user
- **DELETE /users/:id** - Delete a user
<hr>

- **GET /project** - Get all projects
- **GET /project/:id** - Get a single project
- **POST /project** - Create a new project
- **PUT /project/:id** - Update a project
- **DELETE /project/:id** - Delete a project
<hr>

- **GET /task** - Get all tasks
- **GET /task/:id** - Get a single task
- **POST /task** - Create a new task
- **PUT /task/:id** - Update a task
- **DELETE /task/:id** - Delete a task
