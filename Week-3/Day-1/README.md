# Instructions

[Slides](https://docs.google.com/presentation/d/1wgCzBlz86V91sw9mVSITJxfuzAm-U8LL/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)

## Topics To Be Self-Covered:

Self Cover: [](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-third-party-authentication-tools-auth0)  
Up until [Assignment #2 - Use Auth0 in ShopApp](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-assignment-2-use-auth0-in-shopapp)

## Task Of The Day:

Task of the Day: Implement the following features in the Task Management System:

- Add pagination to the all the GET endpoints that return an array of data.
- Add sorting to the all the GET endpoints that return an array of data.
  - For users, sorting can be done by `name` and `createdAt` fields in ascending and descending order.
  - For projects, sorting can be done by `title` and `createdAt` fields in ascending and descending order.
  - For tasks, sorting can be done by `title` and `createdAt` fields in ascending and descending order.
- Add a check to the `POST /register` endpoint to ensure that the user with the same email does not already exist. If the user already exists, return an error message.
- Hash the password field `POST /users` endpoint and `PUT /users/:id` endpoint.
- Add the following authorization rules:
  - Employees can only view projects in which they are involved. This means access to specific tasks that are part of these projects and assigned to them. This applies to both `GET /projects` and `GET /projects/:id` endpoints.
  - Employees can only view tasks that are assigned to them. This applies to both `GET /tasks` and `GET /tasks/:id` endpoints.
  - Allow managers to delete users.

## Take Home Tasks:

- Explore Mailgun's API and implement the following features:
  - Send an email to the user when a new user is created.
  - Implement password reset feature. When a user forgets their password, they can request a unique code to be sent to their email. The user can then use the code to reset their password.

## References

- [Hashing vs Encryption vs Salting](https://cybernews.com/security/hashing-vs-encryption)
- [Understanding Bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt)
- [Bcrypt Documentation (npm)](https://github.com/kelektiv/node.bcrypt.js)
- [How to use JWT in Node.js](https://www.youtube.com/watch?v=7nafaH9SddU)
- [JSON Web Token Documentation (npm)](https://github.com/auth0/node-jsonwebtoken)
- [RBAC vs ABAC](https://www.onelogin.com/learn/rbac-vs-abac)
- [Sending Emails with Mailgun in Node.js](https://documentation.mailgun.com/en/latest/quickstart-sending.html)  
  Choose Node.js in the code sample preference at the top of the page
