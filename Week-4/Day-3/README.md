### Instructions

To round out the Sigma School Backend Development Programme, you will be building the full REST API for the Twitter Clone Project. This will be a fully functional API that will allow users to create accounts, post tweets, follow other users, and more.

## Prerequisites

- Node.js
- Express.js
- MySQL
- Sequelize
- MySQL Workbench or Beekeeper Studio
- Insomnia or Postman
- Completed Twitter Clone Frontend
- Completed all modules in the Backend Development Programme

## Project Requirements

- Users should be able to register for an account (POST /register)
- Users should be able to login to their account (POST /login)
- Users should be able to post tweets (POST /tweets)
- Users should be able to follow other users (POST /follow)
- Users should be able to see tweets from users they follow (GET /feed)
- Users should be able to see a list of all users (GET /users)
- Users should be able to see a list of all tweets from a specific user (GET /users/:id/tweets)
- Users can reply to tweets (POST /tweets/:id/reply)
- Users can like tweets (POST /tweets/:id/like)

## Timeline

### Session One:

1. Brainstorm and Plan the Project

   - Planning and designing the ERD diagram
   - Planning and designing the database schema
   - Auth mechanisms
   - Deployment strategy

2. Project Setup

   - Setup database migrations

3. User Registration and Authentication
   - Implement user model
   - Implement user registration
   - Implement user login

### Session Two:

1. Setup Remaining Models

   - Create Tweet model
   - Create Reply model
   - Create Like model
   - Create Follow model

2. Implement Controllers and Routes

   - Implement user controllers
   - Implement tweet controllers
   - Implement reply controllers
   - Implement like controllers
   - Implement follow controllers

3. Test API Endpoints
   - Test user endpoints
   - Test tweet endpoints
   - Test reply endpoints
   - Test like endpoints
   - Test follow endpoints

### Session Three:

1. Secure API Endpoints

   - Implement authentication middleware
   - Implement authorization middleware

2. Final Testing and Debugging

   - Test all API endpoints
   - Debug and fix any issues

3. Deploy API to Google Cloud Run
   - Write documentation in README.md
   - Deploy API to Google Cloud Run

Once you have completed the project, you should have a fully functional REST API that can be used to power the Twitter Clone frontend.

You will be required to share your work with others.

## Project Setup

[Starter code](./starter-code) has been provided for you in the `starter-code` folder. This includes the database migrations and a basic Express.js server. You will need to create the database schema and tables using the migrations. You will also need to create the Sequelize models and implement the controllers and routes.

Once you have downloaded the starter code, install the dependencies by running `npm install` in the root directory. You can then start the server by running `npm run dev`. The server will be running on port 8080.

You are now ready to start building your API! Remember to follow MVC principles. Good luck!
