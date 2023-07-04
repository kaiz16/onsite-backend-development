### File Sharing Platform API

This is a File Sharing Platform API application built using Node.js, Express.js, and Sequelize ORM. It allows users to register, login, and upload files. Users can also update and delete their files. Users can also make their files public or private. Public files can be accessed by anyone, whereas private files can only be accessed by the user who created them.

### Project Structure

```
├── config                       # Configuration files
│   ├── db.config.js                # Database configuration
├── controllers                  # Controllers
│   ├── auth.controller.js          # Authentication controller
│   ├── files.controller.js         # Files controller
│   └── users.controller.js         # Users controller
├── db                           # Database related files
│   ├── migrations.dev.sql          # Database migrations (development)
│   └── migrations.prod.sql         # Database migrations (production)
├── middlewares                  # Middlewares
│   └── auth.middleware.js          # Authentication middleware
├── index.js                     # Express.js application entry point
├── models                       # Models
│   ├── File.js                     # File model
│   └── User.js                     # User model
├── routes                       # Routes
│   ├── auth.route.js               # Authentication routes
│   ├── files.route.js              # Files routes
│   └── users.route.js              # Users routes
└── utils                        # Utility functions
    ├── bcrypt.util.js                   # Bcrypt utility functions
    ├── parser.util.js                      # File parser utility functions
    └── bucket.util.js                      # Google Cloud Storage utility functions
```

### Setting up the Application

This application uses MySQL database to store the data. You can use the `migrations.[stage].sql` file to create the required database and tables. By default, this app tries to connect to the database on `localhost` with the username `root` and password `sigma12345`. You can change these settings by editing the environment variables in the `.env.[stage]` file.

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
   npm run dev # For development
   npm run prod # For production
   ```

5. Test the application

   Do whatever you want to do with the application. Perhaps, create a really nice looking frontend for it and integrate it with the API? The sky is the limit!

### Testing the Routes

Following are the routes available in this application. You can use Postman or Insomnia to test these routes. Alternatively, you may use the `Insomnia_[date].json` file to import the collection into Insomnia and test the routes.

All routes require the `Authorization` header to be set with the `[token]` value. The token can be obtained by logging in.

- **POST /auth/login** - Login
- **POST /auth/register** - Register
<hr>

- **GET /users** - Get all users
- **GET /users/:id** - Get a single user
- **PUT /users/:id** - Update a user
- **DELETE /users/:id** - Delete a user
- **GET /users/:id/files** - Get all files created by a user
<hr>

- **GET /files** - Get all files
- **GET /files/:id** - Get a single file
- **POST /files** - Create a file
- **PUT /files/:id** - Update a file
- **DELETE /files/:id** - Delete a file
