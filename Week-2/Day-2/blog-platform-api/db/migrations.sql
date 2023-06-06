/* Database schema for the blog_platform database.
 This file is used to create the database and tables.
 To run this file, follow the steps below:
 
 1. Make sure to start the mysql server before running this file.
 docker run --name=mysql-local-server -p 3306:3306 -e MYSQL_ROOT_PASSWORD=sigma12345 -d mysql:8.0
 
 2. Open up Beekeeper Studio and connect to the database.
 
 3. Copy and paste the contents of this file into the query editor.
 
 4. Run the query.
 */
CREATE DATABASE blog_platform;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE blogs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    blog_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (blog_id) REFERENCES blogs(id)
);
