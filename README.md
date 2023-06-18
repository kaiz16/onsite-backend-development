### Week 10: Introduction to Backend & Nodejs & NPM + Databases Part 1

**Day 1**:

- Mentor Sharing Topic & Demo: Introduction to backend web development, including client-server architecture and the role of the backend
- Topics To Be Self-Covered: Introduction to Node.js, installation and setup, using NPM to manage packages
- Task Of The Day: Build a server that generates random quotes server using HTTP server
- Take Home Tasks:
  - Code Along Project 3
  - Assignment 3
  - Capstone Project: Sorting Algo

**Day 2**:

- Mentor Sharing Topic & Demo: Introduction to databases and SQL
- Topics To Be Self-Covered:
  - Installing MySQL
  - Basic usage of MySQL
  - Installing Beekeeper Studio
  - Basics syntax of SQL
    - Creating tables
    - Inserting data
    - Reading data
    - Updating data
    - Deleting data
  - Creating and querying a database using SQL
- Task Of The Day: Create ERD diagram for the todoapp with lucidchart or miro or on whiteboard
- Task Of The Day 2: Create the required entities and attributes for the following application:
  - You are asked to build a database for the car application
    - There are two users type in this app. Sellers and buyers. Sellers can sell their cars and buyers can buy cars.
    - Sellers are able to create/update/delete cars
    - Each car should have the basic information about the car such as brand, model, make, name, vehicle number, whether the vehicle has been sold or not.
    - A vehicle can be sold to one unique buyer. No two users can buy the same vehicle.
    - Once a vehicle is sold, a transaction record should be available.
- Take Home Tasks:
  - Code Along Project 2
  - Assignment 2

**Day 3**:

- Mentor Sharing Topic & Demo: Introduction to NoSQL databases and MongoDB
- Topics To Be Self-Covered:
  - Installing MongoDB
  - Explore document-oriented database
  - Using MongoDB Compass:
    - Creating tables
    - Inserting collections
    - Reading collections
    - Updating collections
    - Deleting collections
- Task Of The Day: Create a database for a social media app in MongoDB. Here's the brief overview of the app:
  - Users information should contain their profile information such as their name, email, phone number, tags and so on. Tags should be an array of strings. Tags should contain/tell the user's preference.
  - Users can create/view/update/delete posts.
  - Users can follow other users.
  - Posts can be liked and commented by different users.
- Take Home Tasks: Module Capstone Project ~ BookingApp

### Week 11: Databases Part 2 + ExpressJS + Advanced ExpressJS

**Day 1**:

- Mentor Sharing Topic & Demo: Introduction to REST APIs and CRUD operations
- Topics To Be Self-Covered: Creating an Express.js app, defining routes, handling requests and responses
- Task Of The Day: Build a simple REST API that performs CRUD operations for a todolist

  - Retrieve a list of all todos (GET /todos)
  - Retrieve a single todo (GET /todos/:id)
  - Create a new todo (POST /todos)
  - Update an existing todo (PUT /todos/:id)
  - Delete a todo (DELETE /todos/:id)
  - Have at least 30 todos and implement pagination + sorting feature to GET /todos route

- Take Home Tasks:
  - Create a new route that retrieves the total count of todos and sends it as a response.
  - Create a route that filters the todos based on their status (e.g., pending) and returns the filtered list.
  - Add validation to the POST /todos and PUT /todos/:id routes using middleware. You can use third party middleware or create from scratch.
  - Add logging to all routes so that you can see the request body, path params, query params, time of the request and user-agent string (browser’s information).
  - Self cover: [Debugging App with VS Code](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-debugging-app-with-vs-code)  
    Up until What is an ORM?

**Day 2**:

- Mentor Sharing Topic & Demo: Integrating a SQL Database to the REST API
- Topics To Be Self-Covered: Creating an Express.js app with database integrated, implementing MVC pattern, using Sequelize ORM
- Task Of The Day: Present an Insomnia Demo of the Practice Project
- Take Home Tasks:
  - Self cover: [Data Validation](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-data-validation)  
    Up until the Capstone Project
  - [Module Capstone Project ~ Create BookingApp](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-module-capstone-project-create-bookingapp)  
    Use the Model-View-Controller (MVC) pattern when creating the BookingApp project.

**Day 3**:

- Mentor Sharing Topic & Demo: Advanced ExpressJS - CORS, Environment Variables, Logging
- Topics To Be Self-Covered: Revision MVC Pattern Module
- Task Of The Day: Build a Task Management System

  - Overview

    - There are three user roles in the system: admin, manager, and employee.
    - Projects have a name, description, start and expected end dates.
    - Tasks belong to a project. Tasks have a name, description, status, and due date.
    - Projects are assigned to managers by admins.
    - Tasks can be assigned to employees by managers.

  - Database Schema:  
    **Goal**: Using Beekeeper Studio, come up with the database schema for a task management system.

    - Figure out the entities involved in the System. Eg: users, tasks, projects, and user roles.
    - Figure out the relationships between the entities. For instance, a user can have multiple tasks assigned to them, and a project can have multiple tasks associated with it.
    - Define the attributes and data types for each entity.
    - Hint: Draw out the ERD diagram first and then create the schema.

  - Models:  
    **Goal**: Create the Sequelize models for all entities in the database.

    - Create a separate model file for each entity in the system, following the MVC pattern
    - Show the relationships between the models. For example, a user may have a foreign key to reference their assigned tasks.

  - MVC Pattern:  
    **Goal**: Implement proper MVC pattern
    - Keep in mind the Model-View-Controller (MVC) pattern while designing the database schema and models.
    - The models should exactly represent the entities in the database schema.
    - The views and controllers are not required for this task.
    - Use environment variables to store the database credentials.
    - Add logging using Morgan middleware to log all requests to the console. The log should include the request body, path params, query params, time of the request, and user-agent string (browser’s information).

- Take Home Tasks:
  - Implement the controllers and routes for the Task Management System.
  - Implement validations where appropriate.

### Week 12: Authentication and Authorization & Using Docker

**Day 1 & 2**:

- Mentor Sharing Topic & Demo: Introduction to authentication and security, implementing auth in ExpressJS
- Topics To Be Self-Covered: Implementing user authentication and authorization using Passport.js - i& understand how hashing works in the background
- Task Of The Day: Implement the following features in the Task Management System:
  - Add pagination to the all the GET endpoints that return an array of data.
  - Add sorting to the all the GET endpoints that return an array of data.
    - For users, sorting can be done by `name` and `createdAt` fields in ascending and descending order.
    - For projects, sorting can be done by `title` and `createdAt` fields in ascending and descending order.
    - For tasks, sorting can be done by `title` and `createdAt` fields in ascending and descending order.
  - Hash the password field `/POST /users` endpoint and `/PUT /users/:id` endpoint.
  - Add the following authorization rules:
    - Employees can only view projects in which they are involved. This means access to specific tasks that are part of these projects and assigned to them. This applies to both `GET /projects` and `GET /projects/:id` endpoints.
    - Employees can only view tasks that are assigned to them. This applies to both `GET /tasks` and `GET /tasks/:id` endpoints.
    - Allow managers to delete users.
- Take Home Tasks: Explore Mailgun's API and implement the following features:
    - Send an email to the user when a new user is created.
    - Implement password reset feature. When a user forgets their password, they can request a unique code to be sent to their email. The user can then use the code to reset their password.

**Day 3**:

- Mentor Sharing Topic & Demo: Introduction to Containerization and Docker
- Topics To Be Self-Covered: installing docker, Building a Docker image, running a container, configuring networking and storage
- Task Of The Day: Setup two environments for the Task Management System API: development and production.
  - The development environment variables should be stored in an `.env.development` file
  - The production environment variables should be stored in an `.env.production` file.
  - There should be two Dockerfiles: `Dockerfile.dev` and `Dockerfile.prod`.
  - The `Dockerfile.dev` should NOT use the `.env.development` file to set the environment variables. Instead, it should use environment variables in the `Dockerfile` itself to pass configuration settings to the application.
  - The `Dockerfile.prod` should NOT use the `.env.production` file to set the environment variables. Instead, it should use environment variables in the `Dockerfile` itself to pass configuration settings to the application.
  - No need to use nodemon in Dockerfiles.
  - Use the `.dockerignore` file to exclude the `node_modules` directory and `.env` files from being copied to the Docker image.
  - Finally, setup an npm script to build the Docker image for both development and production environments. Eg: `npm run build:dev` and `npm run build:prod`.
- Take Home Tasks: Use Docker Compose to start a MySQL database
  - Revision
    - [Day 5 - Integrating a SQL Database to the REST API (MVC Pattern)](https://docs.google.com/presentation/d/1qDhxYoi6bt6YP7RcaaLrsh6sO0RlaSKT/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)
    - [Day 6 - CORS, Environment Variables, Logging](https://docs.google.com/presentation/d/10fBKsYSsaLMBJaOhC5-j_6AiWjLJGQOn/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)

### Week 13: Email Delivery Service, File Upload and GCP
**Day 1**

- Mentor Sharing Topic & Demo: Implementing Email Delivery Service
- Topics To Be Self-Covered: Sending emails with Mailgun in ExpressJS, using Mailgun, Implement forgot password feature by sending reset password link to users with Mailgun
- Task Of The Day: Deploy the Send an email verification link to the user's email address when they sign up:
  - By default, all new users should have their email unverified in the database.
  - When a user signs up, send an email verification link to their email address.
  - When the user clicks on the email verification link, it should update the user's email to verified in the database.
- Take Home Tasks: 
  1. Implement a Notification System:
      - When a user changes their password, send an email to their email address notifying them that their password has been changed.
      - When a project is assigned to a manager, send an email to the manager's email address notifying them that a project has been assigned to them.
      - When a task is assigned to a employee, send an email to the employee's email address notifying them that a task has been assigned to them.
      - When a task is completed, send an email to the employee's email address and the manager's email address notifying them that the task has been completed.
  2. Use email templates to send emails to users. Basically, instead of sending plain text emails, you can send emails with HTML content. This will make your emails look more professional. You can find email templates [here](https://www.mailgun.com/resources/tools/email-templates/).


**Day 2**

- Mentor Sharing Topic & Demo: Introduction to cloud platforms and GCP
- Topics To Be Self-Covered: Setting up a GCP account, deploying a Docker container to GCP, configuring load balancing and auto-scaling
- Task Of The Day: Deploy the Docker container to GCP and configure load balancing and auto-scaling


**Day 3**

- Mentor Sharing Topic & Demo: Introduction to cloud platforms and GCP
- Topics To Be Self-Covered: Setting up a GCP account, deploying a Docker container to GCP, configuring load balancing and auto-scaling
- Task Of The Day: Deploy the Docker container to GCP and configure load balancing and auto-scaling

### Week 14: Final Capstone Project (Backend for Twitter Clone)

**Day 1**:

- Mentor Sharing Topic & Demo: Introduction to the capstone project, including the requirements and the expected outcome
- Topics To Be Self-Covered:
  - Planning and designing the ERD diagram
  - Planning and designing the data model
  - Auth mechanisms
  - Deployment strats
- Task Of The Day: Brainstorm and sketch out the schema design for the Twitter clone backend
- Take Home Tasks: Create a REST API using the ERD diagram
  - These routes must be implemented with database integrated locally
    - /users - Get all users
    - /user/:id - Get a single
    - /user/create - Create a user
    - /user/:id/update - Update a user
    - /user/:id/delete - Delete a user

**Day 2**:

- Mentor Sharing Topic & Demo: Implementation details and best practices for the Twitter clone backend
- Topics To Be Self-Covered: Building the backend using Node.js, Express.js, MongoDB, Passport.js, and Docker, according to the design and the requirements from Day 1
- Task Of The Day: Start implementing the backend for the Twitter clone

**Day 3**:

- Mentor Sharing Topic & Demo: Testing, debugging, and deploying the Twitter clone backend
- Topics To Be Self-Covered: Handling the errors properly, securing the endpoints, performance monitoring (sentry)
- Task Of The Day: Test the app and deploy to GCP
