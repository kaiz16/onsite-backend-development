# Instructions

[Slides](https://docs.google.com/presentation/d/1x_RuEiMu4yP3NfGpWyYfGJF5dPelmPiN/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)

## Topics To Be Self-Covered:

Self Cover: [Testing and Deploying (all)](https://app.sigmaschool.co/posts/csdp-backend-development-level-2b-testing-deploying)

## Task Of The Day: [Starter Code](./task-management-api-starter/)

Task of the Day: Setup two environments for the Task Management System API: development and production.

- The development environment variables should be stored in an `.env.development` file
- The production environment variables should be stored in an `.env.production` file.
- There should be two Dockerfiles: `Dockerfile.dev` and `Dockerfile.prod`.
- The `Dockerfile.dev` should NOT use the `.env.development` file to set the environment variables. Instead, it should use environment variables in the `Dockerfile` itself to pass configuration settings to the application.
- The `Dockerfile.prod` should NOT use the `.env.production` file to set the environment variables. Instead, it should use environment variables in the `Dockerfile` itself to pass configuration settings to the application.
- No need to use nodemon in Dockerfiles.
- Use the `.dockerignore` file to exclude the `node_modules` directory and `.env` files from being copied to the Docker image.
- Finally, setup an npm script to build the Docker image for both development and production environments. Eg: `npm run build:dev` and `npm run build:prod`.

## Take Home Tasks:

- Use Docker Compose to start a MySQL database
  - Revision
    - [Day 5 - Integrating a SQL Database to the REST API (MVC Pattern)](https://docs.google.com/presentation/d/1qDhxYoi6bt6YP7RcaaLrsh6sO0RlaSKT/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)
    - [Day 6 - CORS, Environment Variables, Logging](https://docs.google.com/presentation/d/10fBKsYSsaLMBJaOhC5-j_6AiWjLJGQOn/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)

## References

- [Docker Documentation](https://docs.docker.com/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Dockerfile Tutorial](https://www.tutorialspoint.com/docker/docker_file.htm)
- [What is Docker Compose?](https://docs.docker.com/compose/)
- [Docker Compose Tutorial](https://www.tutorialspoint.com/docker/docker_compose.htm)
