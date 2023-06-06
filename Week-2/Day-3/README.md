# Instructions

[Slides]()

## Topics To Be Self-Covered:

Self Cover: []()

## Task Of The Day:

Task Management System Database Schema and Sequelize Models

- There are three user roles in the system: admin, manager, and employee.
- Projects have a name, description, start and expected end dates.
- Tasks belong to a project. Tasks have a name, description, status, and due date.
- Projects are assigned to managers by admins.
- Tasks can be assigned to employees by managers.

Database Schema:
__Goal__: Using Beekeeper Studio, come up with the database schema for a task management system. 
- Figure out the entities involved in the System. Eg: users, tasks, projects, and user roles.
- Figure out the relationships between the entities. For instance, a user can have multiple tasks assigned to them, and a project can have multiple tasks associated with it.
- Define the attributes and data types for each entity.
- Hint: Draw out the ERD diagram first and then create the schema.

Create the Sequelize Models:
__Goal__: Create the Sequelize models for the entities defined in the previous step.
- Create a separate model file for each entity in the system, following the MVC pattern
- Show the relationships between the models. For example, a user may have a foreign key to reference their assigned tasks.

MVC Pattern:
- Keep in mind the Model-View-Controller (MVC) pattern while designing the database schema and models.
- The models should exactly represent the entities in the database schema.
- The views and controllers are not required for this task.

## Take Home Tasks:

- Implement the controllers and routes for the Task Management System.
- Implement validations where appropriate.

## References

- [MVC Pattern](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
- [Sequelize Data Types](https://sequelize.org/docs/v6/other-topics/other-data-types)
- [Sequelize Raw Queries](https://sequelize.org/docs/v6/core-concepts/raw-queries)
- [Sequelize Validations](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints)
