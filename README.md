
````markdown
# TaskPilot API

TaskPilot is a personal task management system backend built with ASP.NET Core Web API and SQL Server.  
It allows users to manage tasks organized by categories with authentication.

---

## Features

- User registration and JWT authentication
- CRUD operations for Tasks
- CRUD operations for Categories
- Tasks linked to Categories and Users
- Secure API endpoints with authorization

---

## Tech Stack

- ASP.NET Core 8 Web API
- Entity Framework Core
- SQL Server
- JWT Authentication

---

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- SQL Server (Local or Remote)
- [Visual Studio 2022+](https://visualstudio.microsoft.com/) or VS Code

### Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/taskpilot-backend.git
   cd taskpilot-backend
````

2. Configure the connection string in `appsettings.json` to point to your SQL Server database.

3. Apply migrations and update the database

   ```bash
   dotnet ef database update
   ```

4. Run the API

   ```bash
   dotnet run
   ```

---

## API Endpoints

* `POST /api/Auth/register` - Register a new user
* `POST /api/Auth/login` - Login and receive JWT token
* `GET /api/Tasks` - Get all tasks for authenticated user
* `POST /api/Tasks` - Create a new task
* `PUT /api/Tasks/{id}` - Update a task
* `DELETE /api/Tasks/{id}` - Delete a task
* `GET /api/Categories` - Get all categories for authenticated user
* `POST /api/Categories` - Create a new category

*Note: All task and category endpoints require a valid JWT token.*

---

## How to Use

Use tools like [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/) UI (if enabled) to test the API endpoints.

---

---


```

