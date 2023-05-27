

### Week 11: Introduction to Backend & Nodejs & NPM + Databases Part 1 
**Day 1**:
-   Mentor sharing topic & demo: Introduction to backend web development, including client-server architecture and the role of the backend
-   Topics to be self-covered (by students): Introduction to Node.js, installation and setup, using NPM to manage packagesx
-   Task of the day: Build a server that generates random quotes server using HTTP server
-   Take home:  
	- Code Along Project 3
	- Assignment 3
	- Capstone Project: Sorting Algo 

**Day 2**:
-   Mentor sharing topic & demo: Introduction to databases and SQL
-   Topics to be self-covered (by students): Creating and querying a database using SQL
-   Task of the day: Create ERD diagram for the todoapp with  lucidchart or miro or on whiteboard
-   Task of the day 2: Create the required entities and attributes for the following application:
	- You are asked to build a database for the car application
		- There are two users type in this app. Sellers and buyers. Sellers can sell their cars and buyers can buy cars.
		- Sellers are able to create/update/delete cars
		- Each car should have the basic information about the car such as brand, model, make, name, vehicle number, whether the vehicle has been sold or not.
		- A vehicle can be sold to one unique buyer. No two users can buy the same vehicle.
		- Once a vehicle is sold, a transaction record should be available.
-   Take home: 
	- Code Along Project 2
	- Assignment 2


**Day 3**:
-   Mentor sharing topic & demo: Introduction to NoSQL databases and MongoDB
-   Topics to be self-covered (by students): Installing and setting up MongoDB, creating and querying a collection
-   Task of the day: Build a simple Node.js app that connects to MongoDB and retrieves data
-   Take home: Create a database structure and schema structure for the todoapp 

### Week 12: Databases Part 2 + Expressjs + Serverless functions (extras/optional) 
**Day 1**:
-   Mentor sharing topic & demo: Introduction to REST APIs and CRUD operations
-   Topics to be self-covered (by students): Creating an Express.js app, defining routes, handling requests and responses
-   Task of the day: Build a simple REST API that performs CRUD operations for todolist
-   Take home:  Add a new route that will return the total count of todos and another route  that filters for the pending todo 

**Day 2**:
-   Mentor sharing topic & demo: Integrating a database to the REST API
-   Topics to be self-covered (by students): Creating an Express.js app with database integrated,  implementing MVC pattern, handling database errors. 
-   Task of the day: Build a simple Todo REST API that performs CRUD operations on database - MySQL locally.
-    Take home: Same as Day 1 but connected to database

**Day 3**:
-   Mentor sharing topic & demo: Introduction to serverless functions and gcloud function
-   Topics to be self-covered (by students): Creating and deploying a gcloud function
-   Task of the day: Explore gcloud and understand the benefit of a serverless function, understanding when to use it and when to not use it.
-   Take home: Build a simple gcloud function that responds with random quote when called

### Week 13: Auth & Deployment - Docker & GCP 
**Day 1**:
-   Mentor sharing topic & demo: Introduction to authentication and security, using Passport.js for authentication
-   Topics to be self-covered (by students): Implementing user authentication and authorization using Passport.js - i& understand how hashing works in the background
-   Task of the day: Add user authentication and authorization in week 12 
-    Take home: Add forgot password route

**Day 2**:
-   Mentor sharing topic & demo: Introduction to containerization and Docker
-   Topics to be self-covered (by students): installing docker, Building a Docker image, running a container, configuring networking and storage
-   Task of the day: Build a Docker image for the REST API and run it in a container
-   Take home: Use docker compose to start a mysql database

**Day 3**:
-   Mentor sharing topic & demo: Introduction to cloud platforms and GCP
-   Topics to be self-covered (by students): Setting up a GCP account, deploying a Docker container to GCP, configuring load balancing and auto-scaling
-   Task of the day: Deploy the Docker container to GCP and configure load balancing and auto-scaling

### Week 14: Final Capstone Project (Backend for Twitter Clone)
**Day 1**:
-   Mentor sharing topic & demo: Introduction to the capstone project, including the requirements and the expected outcome
-   Topics to be self-covered (by students): 
	- Planning and designing the ERD diagram
	- Planning and designing the data model
	- Auth mechanisms
	- Deployment strats
-   Task of the day: Brainstorm and sketch out the schema design for the Twitter clone backend
-   Take home: Create a REST API using the ERD diagram
	- These routes must be implemented with database integrated locally
		- /users - Get all users
		- /user/:id - Get a single
		- /user/create - Create a user
		- /user/:id/update - Update a user
		- /user/:id/delete - Delete a user

**Day 2**:
-   Mentor sharing topic & demo: Implementation details and best practices for the Twitter clone backend
-   Topics to be self-covered (by students): Building the backend using Node.js, Express.js, MongoDB, Passport.js, and Docker, according to the design and the requirements from Day 1
-   Task of the day: Start implementing the backend for the Twitter clone

**Day 3**:
-   Mentor sharing topic & demo: Testing, debugging, and deploying the Twitter clone backend
-   Topics to be self-covered (by students): Handling the errors properly, securing the endpoints,  performance monitoring (sentry)
-   Task of the day: Test the app and deploy to GCP