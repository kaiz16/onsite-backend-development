## Introduction to Databases

Introduction to NoSQL databases and MongoDB (Day 3)

### Recap: What is a SQL database?

- A SQL database is a relational database that stores data in tables and rows. It's a highly structured database and rule-based, allowing precise and efficient data management.
<!-- Relational Database Image on the side -->

### What is a NoSQL database?

- A NoSQL database is a non-relational database that stores data in documents, key-value pairs, or graphs. It's a flexible database and schema-less, allowing for quick and iterative development.
<!-- Image of sample object in non-relational database -->

### What is the difference between SQL and NoSQL databases?

- SQL databases are relational, NoSQL databases are non-relational. Let's use an example to illustrate this difference. Let's say we have a database of users and their addresses. In a SQL database, we would have two tables: one for users and one for addresses. The users table would have a unique ID for each user, and the addresses table would have a unique ID for each address. The addresses table would also have a column for the user ID, so that we can link each address to a user. In a NoSQL database, we would have one collection of users, and each user would have an array of addresses. The addresses would be embedded in the user document.
<!-- Image of diff between no sql and sql -->

### SQL Terms vs NoSQL Terms

- SQL

  - Database
  - Table/Entity
  - Row/Tuple/Record
  - Column/Field/Attribute
  - Primary Key (PK)

- NoSQL
  - Database
  - Collection
  - Document
  - Field
  - Object ID (OID)

### Then which one should I use?

- There is no right answer for this. It obviously depends on your use case. If you have a highly structured data, and you need to perform complex queries, then SQL is the way to go. If you have a flexible data structure, and you need to perform simple queries, then NoSQL is the way to go. Also keep in mind that SQL has been around for a long time, and it's a mature technology meaning that there are a lot of tools and resources available. NoSQL is a relatively new technology, and it's still evolving. It's also worth mentioning that SQL is a standard language used for relational databases, and it is consistent across SQL database management systems. NoSQL databases, on the other hand, encompass various non-relational databases, and their query languages or APIs may vary.

### Examples of NoSQL databases

- MongoDB
- CouchDB
- RavenDB
- Cassandra

### What is MongoDB?

- MongoDB is a document-oriented NoSQL database. It stores data in JSON-like documents with dynamic schemas, meaning that you can create records without first defining the structure, such as the fields or the types of their values. This makes MongoDB very flexible and adaptable to change.
<!-- Image of MongoDB -->

### Creating a MongoDB database

1. Make sure Docker is installed on your machine.
2. Open your terminal or command prompt and run the following command to create a MongoDB database locally:

   ```sh
   docker run --name mongodb-local-server -p 27017:27017 -d mongo:latest
   ```

   Note: If you encounter any permissions error, use `sudo` before the command (only for Linux and Mac).

3. To check if the MongoDB server is running, run the following command:

   ```sh
   docker ps
   ```

   This will display a list of running Docker containers. Make sure you see the container named `mongodb-local-server` with the status `Up`.

4. Additionally, you can install [MongoDB Compass](https://www.mongodb.com/docs/compass/current/install/), which is a GUI tool for MongoDB. MongoDB Compass allows you to connect to your MongoDB database and view the data in it.

### Connecting to a MongoDB database using MongoDB Compass

1. Open MongoDB Compass and click "New Connection."
2. Enter this in the URI field: `mongodb://localhost:27017`
3. Click "Connect."
4. MongoDB Compass will connect to your database. Explore and manage your data using the GUI.
<!-- Image of MongoDB Compass with connection string -->

### Connection String

- A connection string is a string that specifies information about a data source and the means of connecting to it. It is passed in code to an underlying driver or provider in order to initiate the connection. For example, the connection string template for MongoDB is `mongodb://<username>:<password>@<host>:<port>/<defaultauthdb>`.
- Let's break this down
  - `mongodb://` is the protocol prefix that indicates that the connection string is for MongoDB.
  - `<username>:<password>` is the username and password for the database. If you don't have a username and password, you can omit this part.
  - `<host>` is the host name or IP address of the server hosting the database.
  - `<port>` is the port number on which the database is listening for connections.
  - `<defaultauthdb>` is the name of the database to authenticate if the connection string includes authentication credentials in the form of username:password@. If you don't have a default authentication database, you can omit this part.

So our connection string is `mongodb://localhost:27017`. We omitted the username, password, and default authentication database because we don't have them.

### Case Study: Touch'n Go System

Someone asked us to build a Touch'n Go system. Here are the feature breakdown:

- Users can register and login.
- Users can add money to their wallet.
- Users can pay using their wallet.
- Users can view their transaction history.
- Merchants can register and login.
- Merchants can view their transaction history.
- Merchants can receive money from users.

Since this is a just a first version, we don't need to worry about security and scalability. We just need to build the core features.

### Q: Let's start by identifying the entities in our system.

How many entities do you see? What are they? What are their attributes?

### A: Let's start by identifying the entities in our system.

How many entities do you see? What are they? What are their attributes?

- Users
  - Object ID
  - Name
  - Email
  - Phone Number
- Merchants
  - Object ID
  - Company Name
  - Company Email
  - Phone Number
- User Transactions
  - Object ID
  - User Object ID
  - Type (Add/Deduct)
  - Timestamp
  - Amount
- Merchant Transactions
  - Object ID
  - Merchant Object ID
  - Timestamp
  - Amount

### Self Cover: [NoSQL Database](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-what-is-a-nosql-database)

Up until Assigment 3

### Task of the day

Your task for today is to design a social media app. Here's the overview of the app:

- Users information should contain their profile information such as their name, email, phoneNumber, tags and so on. Tags should be an array of strings. Tags should contain/tell about the user's preference.
- Users can create/view/update/delete posts.
- Users can follow other users.
- Posts can be liked and commented by different users.

### Take home tasks

### Some homework 📚

[Module Capstone Project ~ BookingApp](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-module-capstone-project-bookingapp)


### Refererences
- [MongoDB Datatypes](https://www.tutorialspoint.com/mongodb/mongodb_datatype.htm)  
- [Relational Databases vs. NoSQL Document Databases](https://lennilobel.wordpress.com/2015/06/01/relational-databases-vs-nosql-document-databases/)