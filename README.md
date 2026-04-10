# Task Manager API

A REST API for managing tasks with JWT authentication built with Node.js, Express, and MongoDB.

## Live Demo
Base URL: `coming`

---

## Tech Stack

- **Node.js** — Runtime environment
- **Express** — Web framework
- **MongoDB** — Database
- **Mongoose** — ODM for MongoDB
- **JWT** — Authentication
- **Bcrypt** — Password hashing

---

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   ├── authController.js  # Auth logic
│   └── taskController.js  # Task logic
├── middleware/
│   ├── authMiddleware.js  # JWT verification
│   └── errorHandler.js    # Global error handling
├── models/
│   ├── user.js            # User schema
│   └── task.js            # Task schema
├── routes/
│   ├── authRoutes.js      # Auth endpoints
│   └── taskRoutes.js      # Task endpoints
├── utils/
│   └── asyncHandler.js    # Async error wrapper
└── server.js              # Entry point
```

---

## Features

- User registration and login
- JWT based authentication
- Protected routes with auth middleware
- Full task CRUD operations
- Tasks linked to authenticated user
- Global error handling

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repo
git clone https://github.com/Gagan0014/task-manager.git
cd task-manager/backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

---

## Environment Variables

Create a `.env` file in the backend folder:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## API Endpoints

### Auth Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |

### Task Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all tasks | Yes |
| POST | `/api/tasks` | Create new task | Yes |
| PUT | `/api/tasks/:id` | Update task | Yes |
| DELETE | `/api/tasks/:id` | Delete task | Yes |

---

## Request & Response Examples

### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Create Task
```http
POST /api/tasks
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

Response:
```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d2",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "user": "64f1a2b3c4d5e6f7a8b9c0d1",
  "createdAt": "2024-04-10T10:00:00.000Z"
}
```

### Get All Tasks
```http
GET /api/tasks
Authorization: Bearer <your_token>
```

Response:
```json
[
  {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d2",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "createdAt": "2024-04-10T10:00:00.000Z"
  }
]
```

---

## Future Improvements

- Task status (todo / in-progress / done)
- Task priority levels
- Due dates
- Frontend with React
- Real-time notifications

---

## Author

**Gagan** — [GitHub](https://github.com/Gagan0014)
