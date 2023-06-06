### Blog Platform API

This is a Blog Platform API application built using Node.js, Express.js, and Sequelize ORM. It allows users to create blogs and comment on them.

### Project Structure

```
├── config                       # Configuration files
│   ├── db.config.js                # Database configuration
├── controllers                  # Controllers
│   ├── blogs.controller.js         # Merchants controller
│   ├── comments.controller.js      # Comments controller
│   └── users.controller.js         # Users controller
├── db                           # Database related files
│   └── migrations.sql              # Database migrations
├── index.js                     # Express.js application entry point
├── models                       # Models
│   ├── Blog.js                     # Blog model
│   ├── Comment.js                  # Comment model
│   └── User.js                     # User model
└── routes                       # Routes
    ├── blogs.route.js              # Blogs routes
    ├── comments.route.js           # Comments routes
    └── user.route.js               # Users routes
```

### Running the Application

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

### Database

This application uses MySQL database to store the data. You can use the `migrations.sql

#### Routes

Following are the routes available in this application. You can use Postman or Insomnia to test these routes. Alternatively, you may use the `Insomnia_[date].json` file to import the routes into Insomnia.

- **GET /users** - Get all users
- **GET /users/:id** - Get a single user
- **POST /users** - Create a new user
- **PUT /users/:id** - Update a user
- **DELETE /users/:id** - Delete a user
<hr>

- **GET /blogs** - Get all blogs
- **GET /blogs/:id** - Get a single blog
- **POST /blogs** - Create a new blog
- **PUT /blogs/:id** - Update a blog
- **DELETE /blogs/:id** - Delete a blog
<hr>

- **GET /blogs/:id/comments** - Get all comments for a blog
- **POST /blogs/:id/comments** - Create a new comment for a blog
- **PUT /blogs/:id/comments/:commentId** - Update a comment for a blog
- **DELETE /blogs/:id/comments/:commentId** - Delete a comment for a blog
