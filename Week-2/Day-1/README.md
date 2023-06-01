# Instructions

[Slides](https://docs.google.com/presentation/d/1Eylw1zAm3KIBGB7_3SuEKd66azy0bdLK/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)

## Topics To Be Self-Covered:

Self Cover: [Intro to ExpressJS](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-intro-to-expressjs)  
Up until Debugging App with VS Code

## Task Of The Day:

Build a simple REST API that performs CRUD operations for a todolist

- Retrieve a list of all todos (GET /todos)
- Retrieve a single todo (GET /todos/:id)
- Create a new todo (POST /todos)
- Update an existing todo (PUT /todos/:id)
- Delete a todo (DELETE /todos/:id)
- Have at least 30 todos and implement pagination + sorting feature to GET /todos route

## Take Home Tasks:

- Create a new route that retrieves the total count of todos and sends it as a response.
- Create a route that filters the todos based on their status (e.g., pending) and returns the filtered list.
- Add validation to the POST /todos and PUT /todos/:id routes using middleware. You can use third party middleware or create from scratch.
- Add logging to all routes so that you can see the request body, path params, query params, time of the request and user-agent string (browser’s information).
- Self cover: [Debugging App with VS Code](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-debugging-app-with-vs-code)  
Up until What is an ORM?

## References

- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [RESTful API Design Best Practices](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/)
- [Devdocs HTTP Methods(GET, POST, PUT, DELETE)](https://devdocs.io/http-methods/)
- [Handling Errors in RESTful APIs](https://expressjs.com/en/guide/error-handling.html)
- [Express.js Middleware](https://expressjs.com/en/guide/using-middleware.html)
