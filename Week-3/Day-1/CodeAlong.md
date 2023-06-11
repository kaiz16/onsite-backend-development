### Auth Flow Requirements

If we recall, the Task Management System has three user roles: admin, manager, and employee.

Here's the list of requirements for the authentication flow:

- Users entity:

  - Admins have full access to all users.
  - Managers can only view users but not create, update, or delete them.
  - Employees can only view their own user profile but not other users' profiles.

- Projects entity:

  - Admins and managers have full access to all projects.
  - Employees can only view projects but not create, update, or delete them.

- Tasks entity:
  - Admins and managers have full access to all tasks.
  - Employees can only view tasks but not create, update, or delete them.

Therefore, we need to implement a way to check whether the user has the correct role to perform certain actions.

### Setting Up the Project

1. Clone the project from [here](https://replit.com/@coding-fundamentals1/Day-35-CORS-Environment-Variables-Logging-Advanced#task-management-api).
2. Open up the Beekeeper Studio and connect to the local database.
3. Run the migrations.sql file to create the database and tables.
4. Install the dependencies.

```bash
npm install
```

5. Start the server.

```bash
nodemon index.js
```

### Adding Password Field to User Entity

We obviously need a way to store the passwords of the users in the database. We have created the user entity in the database but we haven't added a password field to it. Let's add a password field to the user entity to support authentication and authorization.

Open Beekeeper Studio and execute the query below:

```sql
ALTER TABLE users ADD COLUMN password VARCHAR(255) NOT NULL AFTER EMAIL;
```

In the query above, we're adding a password field to the user entity. We'll use this field to store the hashed password.

### Adding Password Field to User Model

Next, let's modify the `User.js` in the `models` directory and add the password field to it.

```js
// After the email field
password: {
  type: DataTypes.STRING,
  allowNull: false,
  field: "password"
},
... // The rest of the code
```

That's it. We are now ready to implement JWT authentication.

### The Auth Flow

Before we start implementing JWT authentication, let's break down the flows: registration, login, and authorization.

For the Registration Flow:

1. The user sends a POST request to the /auth/register endpoint with their name, email, password and role.
2. The server hashes the password and saves the user to the database.
3. The server sends a response if the user was successfully created.

For the Login Flow (Authentication):

1. The user sends a POST request to the /auth/login endpoint with their email and password.
2. The server checks if the user exists in the database.
3. The server checks if the password is correct by comparing the hashed password with the password sent in the request.
4. If the password is correct, the server generates a JWT and sends it to the user.

For the Authorization Flow:

1. The user sends a request to a protected endpoint with the JWT in the Authorization header.
2. The server verifies the JWT.
3. If the JWT is valid, the server checks if the user has the necessary permissions to access the resource.

### Installing the Packages

We're gonna need to install some packages to help us with the authentication and authorization:

- **bcrypt**: A library to help us hash passwords.
- **jsonwebtoken**: An implementation of JSON Web Tokens.

Install the above packages by running the following command:

```bash
npm install bcrypt jsonwebtoken
```

### Creating Helper Functions

Next, let's create some helper functions that we'll use throughout the project.

Create a new folder called `utils` in the root of the project. Inside the `utils` folder, create a new file called `bcrypt.util.js`.

In the `bcrypt.util.js` file, add the following code:

```js
const bcrypt = require("bcrypt");

const saltRounds = 10;

function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
```

In the code above, we're creating two helper functions `hashPassword` and `comparePassword`.

- The `hashPassword` function takes in a password and returns a hashed password.

- The `comparePassword` function takes in a password and a hashed password and returns a boolean value indicating whether the password is correct.

- Finally, we're exporting the two functions so that we can use them in other files.

### What is a Salt?

A salt is a unique, random string or number added to a password before hashing. The salt is then stored with the hashed password.

When we say "10 salt rounds" in bcrypt, it refers to a cost factor of 2^10. More salt rounds increase security by making the hashing process more computationally intensive, thus slowing down brute force attacks. However, it also means more system resources are used during hashing. Simply put, the higher the number, the more secure the hash is, but it takes longer to hash the password.

### Implementing User Registration

It's time to make use of the helper functions we created earlier. Let's implement the user registration.

1. Create a new file named `auth.controller.js` in the `controllers` folder.
2. Then, add the following code to the `auth.controller.js` file:

```js
const User = require("../models/User.js");
const { hashPassword } = require("../utils/bcrypt.util.js");

async function register(req, res) {
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

module.exports = {
  register,
};
```

In the code above, before saving the user to the database, we hash the password using the `hashPassword` helper function. Then, we save the user to the database. Notice that we're using the spread operator to spread the request body and then override the password field with the hashed password. As a result, the password field in the database will be the hashed password and not the plain text password.

### Adding the Auth Routes

Now that we have the user registration implemented, let's add the auth routes so that we can test the user registration.

1. Create a new file named `auth.route.js` in the `routes` folder.
2. Then, add the following code to the `auth.route.js` file:

```js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");

router.post("/register", authController.register);
// TODO: Add login route

module.exports = router;
```

3. Finally, open up `index.js` in the root of the project and add the new auth routes as follow:

```diff
const tasksRoutes = require("./routes/tasks.route.js");
+ const authRoutes = require("./routes/auth.route.js");

app.use("/tasks", tasksRoutes);
+ app.use("/auth", authRoutes);
```

### Testing the User Registration

Try to register a new user by sending a POST request to the /auth/register endpoint with the following data:

```json
{
  "name": "John Doe",
  "email": "johndoe@jdoe.co",
  "password": "123456",
  "role": "admin"
}
```

If everything is working correctly, you should see the newly created user as the response. You should also see the hashed password in the response.

### Implementing User Login

Now that we have the user registration implemented and working, we need to implement the user login. The user login will be a bit more complicated than the user registration.

1. Open up `auth.controller.js` in the `controllers` folder and import the `comparePassword` helper function as follow:

```js
const { hashPassword, comparePassword } = require("../utils/bcrypt.util.js");
```

2. Then, add the new login function as follow:

```js
async function login(req, res) {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!email && !password) {
      // This will go to the catch block
      throw "Email and password are required";
    }

    // Validate if user exist in our database
    const user = await User.findOne({ where: { email } });

    // If user exist then validate password
    const passwordMatch = comparePassword(password, user.password);

    if (!passwordMatch) {
      // This will go to the catch block
      throw "Invalid login credentials";
    }

    // TODO: Generate JWT here

    res.status(200).json(user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  register,
  login,
};
```

Let's break down the code above:

- First, we get the email and password from the request body.
- Then, we check if the email and password are provided. If not provided, we throw an error.
- Next, we check if the user exists in the database. Else we throw an error.
- If the user exists, we compare the password provided with the password in the database. If the passwords don't match, we throw an error.
- If the passwords match, we send the user as a response.

### Generating JWT

In our `login` function, we send the user object as a response after the user is authenticated.

However while sending the user object might seem like an acceptable approach, it creates potential security and performance issues:

- Security: The user object is not encrypted, so it can be easily decoded to reveal sensitive information such as the user's password.
- Performance: The user object can be quite large. Sending the user object with every request will increase the size of the request and response payloads, which can negatively impact performance.

This is where JSON Web Tokens (JWTs) come into play. By generating and sending a JWT instead of a full user object, we can generate a token that contains claims that identify the user. Claims are pieces of information about the user, such as the user id, email, and role.

Since JWTs are digitally signed from the server, which ensures that the token has not been modified. The token can be used to authorize user's access to protected resources.

### Implementing JWT Generation

1. Open up `auth.controller.js` in the `controllers` folder and add the following line at the top of the file:

```js
const jwt = require("jsonwebtoken");
```

2. Then, let's replace the `// TODO: Generate JWT here` comment with the following code:

```js
// Generate JWT
const token = jwt.sign(
  { id: user.id, email: user.email, role: user.role },
  "123456",
  {
    expiresIn: "2h",
    algorithm: "HS256",
  }
);
```

In the code above, we're generating a JWT using the `jwt.sign` method.

- The first argument is the payload, which is an object containing the user id, email, and role. **The payload.**
- The second argument is the secret key, which is used to sign the token. **The signature.**
- The third argument is the options object, which contains the expiration time of the token and the algorithm used to sign the token. **The header**.

jsonwebtoken library supports a variety of algorithms for signing tokens. In this case, we're using the HS256 algorithm, which is a symmetric algorithm that uses a secret key to sign the token. You can find a list of supported algorithms [here](https://github.com/auth0/node-jsonwebtoken#algorithms-supported).

We'll talk more about the secret key later.

3. Finally, sed the token as a response instead of the user object:

```diff
+ res.status(200).json({ accessToken: token });
- res.status(200).json(user);
```

### Adding the Login Route

Now that we have the user login implemented, let's add the login route so we can test it.

1. Open up `auth.route.js` in the `routes` folder and add the new login route as follow:

```diff
router.post("/register", authController.register);
+ router.post("/login", authController.login);
```

### Testing the User Login

Try to login with the user you created earlier by sending a POST request to the /auth/login endpoint with the following data:

```json
{
  "email": "johndoe@jdoe.co",
  "password": "123456"
}
```

If everything is working correctly, you should see the JWT as the response.

### Verifying JWT

Go to [jwt.io](https://jwt.io/) and copy-paste the JWT you got from the previous step. You should see the decoded token that contains the user id, email, and role as well as the signature that was used to sign the token.

This token is digitally signed, so we can verify that the token has not been tampered with. Any changes to the token will invalidate the signature and the token will be rejected.

### The Secret Key

In the `jwt.sign` method, we used the `123456` as the secret key to sign the token. Here are a few things you need to know about secret key:

- This secret key is used to sign and verify the token.
- If the secret key is exposed, then the token can be easily tampered with.
- If the secret key is changed, then all the tokens that were signed with the old secret key will become invalid.
- The secret key should be kept secure. It should not be stored in the codebase or in the database. It should be stored in a secure location such as a `.env` file.
- The secret key should be long and complex. For example, it can be a random string of 32 characters or simply a UUID.

In fact, we should be using `.env` file to securely store the secret key. Let's do that now.

Open up the `.env` file in the root directory and add the following line:

```
SECRET_KEY=123456
```

Then, open up `auth.controller.js` in the `controllers` folder and replace the secret key with the following code:

```diff
- "123456"
+ process.env.SECRET_KEY
```

For now, we'll use the easy-to-remember `123456` as the secret key. However, in a real-world application, you should use a long and complex secret key. It's also a good practice to rotate the secret key periodically to prevent the token from being compromised.

### Protecting Routes using Middleware

Sometimes, we want to protect certain routes so that only authenticated users can access them. For instance, we want to protect the `/projects` routes so that only authenticated users can access it but not the `/auth/login` or `/auth/register` routes.

To do this, we'll create a custom middleware function that helps us verify whether the user is authenticated or not.

1. Create a new folder called `middlewares` in the root directory.
2. Create a new file named `auth.middleware.js` in the `middlewares` folder and add the following code:

```js
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  // Get auth header value
  const token = req.headers["authorization"];

  try {
    // Check if token is undefined
    if (!token) {
      // This will go to the catch block
      throw "No token provided";
    }

    // Verify & decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // Set the user in the request object
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ error: error });
  }

  // If everything is good, then proceed to the next middleware (if any)
  return next();
}

module.exports = {
  verifyToken,
};
```

Let's break down the code above:

- First, we get the token from the `Authorization` header.
- Then, we check if the token exists. If not, throw an error. This will force the user to send the token in the `Authorization` header.
- Next, we verify the token using the `jwt.verify` method. If the token is valid, we set the `req.user` to the decoded token. The `jwt.verify` method will parse the token and return the payload if the token is valid. If the token is invalid, it will throw an error.
- Finally, if no error is thrown, we call the `next` function to pass control to the next middleware function (if any).

### Protecting the Projects Routes

Now that we have the middleware function, let's use it to protect the `/projects` routes.

1. Open up `project.route.js` in the `routes` folder and add the following line at the top of the file:

```js
const { verifyToken } = require("../middlewares/auth.middleware.js");
```

2. Then, replace the routes with the following code:

```js
router.get("/", verifyToken, projectsController.getAllProjects);
router.get("/:id", verifyToken, projectsController.getProjectById);
router.post("/", verifyToken, projectsController.createProject);
router.put("/:id", verifyToken, projectsController.updateProject);
router.delete("/:id", verifyToken, projectsController.deleteProject);
```

Basically, we're adding the `verifyToken` middleware function before calling the controller methods. This will ensure that the user is authenticated before accessing the routes.

### Protecting the Tasks Routes

Let's do the same for the `/tasks` routes.

1. Open up `task.route.js` in the `routes` folder and add the following line at the top of the file:

```js
const { verifyToken } = require("../middlewares/auth.middleware.js");
```

2. Then, replace the routes with the following code:

```js
router.get("/", verifyToken, tasksController.getAllTasks);
router.get("/:id", verifyToken, tasksController.getTaskById);
router.post("/", verifyToken, tasksController.createTask);
router.put("/:id", verifyToken, tasksController.updateTask);
router.delete("/:id", verifyToken, tasksController.deleteTask);
```

### Protecting the Users Routes

Let's do the same for the `/users` routes.

1. Open up `user.route.js` in the `routes` folder and add the following line at the top of the file:

```js
const { verifyToken } = require("../middlewares/auth.middleware.js");
```

2. Then, replace the routes with the following code:

```js
router.get("/", verifyToken, usersController.getAllUsers);
router.get("/:id", verifyToken, usersController.getUserById);
router.post("/", verifyToken, usersController.createUser);
router.put("/:id", verifyToken, usersController.updateUser);
router.delete("/:id", verifyToken, usersController.deleteUser);
```

### Testing the Protected Routes

We protected all routes except the `/auth/login` and `/auth/register` routes. Let's test the protected routes.

Try to access the `/projects` routes without sending the token in the `Authorization` header. You should see a 401 Unauthorized response.

Now, try to access the them with the JWT in the `Authorization` header. To do this, go to headers tab in Insomnia and set the key to "Authorization" and copy-paste the accessToken (without the double quotes) in value field.

Pretty cool, right? Now, only authenticated users can access the protected routes.

### Authorization

Congratulations! You have successfully implemented the authentication part of the API. Now, let's move on to the authorization part.

Go back to the [Auth Flow Requirements](#auth-flow-requirements) section and take a look at the authorization rules. We'll implement the authorization rules one by one.

### Checking User Role

Let's create a new middleware function that checks whether the user has the correct role to perform certain actions.

1. Add this function to the `auth.middleware.js` file:

```js
function checkRole(roles) {
  return (req, res, next) => {
    // Roles is an array. For example, ['admin', 'manager']
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    return next();
  };
}

module.exports = {
  verifyToken,
  checkRole,
};
```

In the code above, we're simply checking whether the user's role matches the role that we passed in as an argument. If the user's role does not match, we send an error response. Otherwise, we call the `next` function to pass control to the next middleware function (if any).

For example, we can use the `checkRole` function as follows:

```js
// Only admin can access this route
checkRole(["admin"]);
// Only admin and manager can access this route
checkRole(["admin", "manager"]);
// All can access this route
checkRole(["admin", "manager", "employee"]);
// No one can access this route
checkROle([]);
```

### Tasks Routes Authorization

For the tasks routes based on the requirements, the following rules apply:

- Get all tasks: All roles can access this route.
- Get task by id: All roles can access this route.
- Create task: Only admin and manager roles can access this route.
- Update task: Only admin and manager roles can access this route.
- Delete task: Only admin and manager roles can access this route.

1. Modify the `tasks.route.js` file in the `routes` folder as follows:

```js
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js");

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  tasksController.getAllTasks
);

router.get(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  tasksController.getTaskById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "manager"]),
  tasksController.createTask
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  tasksController.updateTask
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  tasksController.deleteTask
);
```

### Projects Routes Authorization

For the projects routes based on the requirements, the following rules apply:

- Get all projects: All roles can access this route.
- Get project by id: All roles can access this route.
- Create project: Only admin and manager roles can access this route.
- Update project: Only admin and manager roles can access this route.
- Delete project: Only admin and manager roles can access this route.

1. Modify the `projects.route.js` file in the `routes` folder as follows:

```js
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js");

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  projectsController.getAllProjects
);

router.get(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  projectsController.getProjectById
);

router.post(
  "/",
  verifyToken,
  checkRole(["admin", "manager"]),
  projectsController.createProject
);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  projectsController.updateProject
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager"]),
  projectsController.deleteProject
);
```

### Users Routes Authorization

For the users routes based on the requirements, the following rules apply:

- Get all users: All roles can access this route. However, employees can only view their own user profile.
- Get user by id: All roles can access this route. However, employees can only view their own user profile.
- Create user: Only admin users can access this route.
- Update user: Only admin users can access this route.
- Delete user: Only admin users can access this route.

1. Modify the `users.route.js` file in the `routes` folder as follows:

```js
const { verifyToken, checkRole } = require("../middlewares/auth.middleware.js");

router.get(
  "/",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  usersController.getAllUsers
);

router.get(
  "/:id",
  verifyToken,
  checkRole(["admin", "manager", "employee"]),
  usersController.getUserById
);

router.post("/", verifyToken, checkRole(["admin"]), usersController.createUser);

router.put(
  "/:id",
  verifyToken,
  checkRole(["admin"]),
  usersController.updateUser
);

router.delete(
  "/:id",
  verifyToken,
  checkRole(["admin"]),
  usersController.deleteUser
);
```

### Attributes-based Access Control

We're 90% done with the authorization feature. We've used `checkRole` middleware function to check whether the user has the correct role to perform certain actions. This is known as role-based access control (RBAC). For instance, a user with the role `admin` can perform all actions, whereas a user with the role `employee` can only perform certain actions.

What if we want to restrict access to certain resources based on the user's id or other attributes? For example, we want to only allow employees to view their own user profile. This is known as attribute-based access control (ABAC). We'll implement this in the next section.

### Implementing Attribute-based Access Control

Since employees can only view their own user profile, we need to check whether the user's role is `employee` and if so, we need to return only the current user's profile.

1. Modify the `getAllUsers` controller in the `users.controller.js` file in the `controllers` folder as follows:

```js
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
```

### Implementing Attribute-based Access Control (cont)

Finally, modify the `getUserById` controller in the `users.controller.js` file in the `controllers` folder as follows:

```js
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
```

### Testing the Authorization Rules

It's time to test the authorization rules we implemented. Use either Postman or Insomnia to test the authorization rules.

Note: Don't forget to include the `Authorization` header with the JWT token for the routes that require authorization.

- Register a new user with the role `employee`.
- Register another user with the role `manager`.
- Register another user with the role `admin`.

- Login as the `admin` user

  - Get all users: You should be able to get all users.
  - Get user by id: You should be able to get all users.
  - Create user: You should be able to create a new user.
  - Update user: You should be able to update a user profile.
  - Delete user: You should be able to delete a user profile.

- Login as the `manager` user

  - Get all users: You should be able to get all users.
  - Get user by id: You should be able to get all users.
  - Create user: You should not be able to create a new user.
  - Update user: You should not be able to update a user profile.
  - Delete user: You should not be able to delete a user profile.

- Login as the `employee` user

  - Get all users: You should be able to get only your own user profile.
  - Get user by id: You should be able to get only your own user profile.
  - Create user: You should not be able to create a new user.
  - Update user: You should not be able to update your own user profile.
  - Delete user: You should not be able to delete your own user profile.

- Login as the `admin` user

  - Get all projects: You should be able to get all projects.
  - Get project by id: You should be able to get all projects.
  - Create project: You should be able to create a new project.
  - Update project: You should be able to update a project.
  - Delete project: You should be able to delete a project.

- Login as the `manager` user

  - Get all projects: You should be able to get all projects.
  - Get project by id: You should be able to get all projects.
  - Create project: You should be able to create a new project.
  - Update project: You should be able to update a project.
  - Delete project: You should be able to delete a project.

- Login as the `employee` user

  - Get all projects: You should be able to get all projects.
  - Get project by id: You should be able to get all projects.
  - Create project: You should not be able to create a new project.
  - Update project: You should not be able to update a project.
  - Delete project: You should not be able to delete a project.

- Login as the `admin` user

  - Get all tasks: You should be able to get all tasks.
  - Get task by id: You should be able to get all tasks.
  - Create task: You should be able to create a new task.
  - Update task: You should be able to update a task.
  - Delete task: You should be able to delete a task.

- Login as the `manager` user

  - Get all tasks: You should be able to get all tasks.
  - Get task by id: You should be able to get all tasks.
  - Create task: You should be able to create a new task.
  - Update task: You should be able to update a task.
  - Delete task: You should be able to delete a task.

- Login as the `employee` user
  - Get all tasks: You should be able to get all tasks.
  - Get task by id: You should be able to get all tasks.
  - Create task: You should not be able to create a new task.
  - Update task: You should not be able to update a task.
  - Delete task: You should not be able to delete a task.

### Conclusion

Congratulations! 🎉

Tackling authentication and authorization is no small. It stands as one of the most complex yet vital aspects of web development. Successfully building a complete authentication and authorization system from scratch is indeed a huge accomplishment!

The beauty of the implementation you've just completed is its reusability. The underlying methods and principles of authentication and authorization that you've learned can be transferred and applied to future projects. Of course, the entities and authorization rules may vary from one project to another, the base implementation can be reused.

So, take a moment to appreciate the knowledge and skills you've gained. This is a major milestone in your journey as a full-stack developer!