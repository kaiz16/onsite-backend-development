### Week 11: Introduction to Backend & Nodejs & NPM + Databases Part 1

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

### Week 12: Databases Part 2 + Expressjs + Serverless functions (extras/optional)

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

- Mentor Sharing Topic & Demo: Integrating a database to the REST API
- Topics To Be Self-Covered: Creating an Express.js app with database integrated, implementing MVC pattern, handling database errors.
- Task Of The Day: Build a simple Todo REST API that performs CRUD operations on database - MySQL locally.
- Take Home Tasks: Same as Day 1 but connected to database

**Day 3**:

- Mentor Sharing Topic & Demo: Introduction to serverless functions and gcloud function
- Topics To Be Self-Covered: Creating and deploying a gcloud function
- Task Of The Day: Explore gcloud and understand the benefit of a serverless function, understanding when to use it and when to not use it.
- Take Home Tasks: Build a simple gcloud function that responds with random quote when called

### Week 13: Auth & Deployment - Docker & GCP

**Day 1**:

- Mentor Sharing Topic & Demo: Introduction to authentication and security, using Passport.js for authentication
- Topics To Be Self-Covered: Implementing user authentication and authorization using Passport.js - i& understand how hashing works in the background
- Task Of The Day: Add user authentication and authorization in week 12
- Take Home Tasks: Add forgot password route

**Day 2**:

- Mentor Sharing Topic & Demo: Introduction to containerization and Docker
- Topics To Be Self-Covered: installing docker, Building a Docker image, running a container, configuring networking and storage
- Task Of The Day: Build a Docker image for the REST API and run it in a container
- Take Home Tasks: Use docker compose to start a mysql database

**Day 3**:

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
