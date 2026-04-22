# Task Manager (Full Stack App)

A full-stack task management application with JWT authentication, role-based access control, and a simple React frontend.

---

## 🚀 Live Demo

Baackend Api: `https://task-manager-288g.onrender.com`

Frontend: Runs locally (see setup below)
---

## 🛠 Tech Stack

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT (Authentication)
* Bcrypt (Password hashing)

### Frontend

* React (Vite)
* Fetch API

---

## 📂 Project Structure

```
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
└── server.js

frontend/
├── src/
│   ├── components/
│   │   ├── Auth.jsx
│   │   └── Dashboard.jsx
│   └── App.jsx
```

---

## ✨ Features

* User registration & login
* JWT-based authentication
* Role-based access control (Admin/User)
* Protected routes using middleware
* CRUD operations for tasks
* Input validation & error handling
* Simple React UI connected to backend

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Gagan0014/task-manager.git
cd task-manager
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file in backend:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔑 API Endpoints

### Auth Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |

---

### Task Routes

| Method | Endpoint        | Description   |
| ------ | --------------- | ------------- |
| GET    | `/api/task`     | Get all tasks |
| POST   | `/api/task`     | Create task   |
| PUT    | `/api/task/:id` | Update task   |
| DELETE | `/api/task/:id` | Delete task   |

---

### Admin Route

| Method | Endpoint           | Description                       |
| ------ | ------------------ | --------------------------------- |
| GET    | `/api/admin/tasks` | Get all users' tasks (admin only) |

---

## 🔐 Authentication

All protected routes require:

```
Authorization: Bearer <token>
```

---

## 🧪 How to Test

1. Register a user
2. Login to get JWT token
3. Use token in headers
4. Perform CRUD operations on tasks

---

## 🖼 Screenshots

### Login Page
![Login](./screenshots/login.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

## 📈 Scalability Notes

* Can be split into microservices (auth, tasks)
* Redis can be used for caching
* Load balancing for high traffic
* Docker for containerized deployment

---

## 👤 Author

**Gagan**
GitHub: https://github.com/Gagan0014
