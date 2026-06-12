# Task Manager - Full Stack MERN Application

A production-ready Task Management application built with the MERN stack. The application provides secure JWT authentication, role-based authorization, task management features, and a responsive frontend interface. It follows clean architecture principles and a scalable folder structure suitable for real-world applications.

---

## 🚀 Live Demo

### Frontend

https://task-manager-ashen-chi.vercel.app

### Backend API

https://task-manager-288g.onrender.com

---

## 📸 Screenshots

### Login Page

![Login](./screenshots/Login.png)

### Register Page

![Register](./screenshots/Register.png)

### Dashboard

![Dashboard](./screenshots/Dashboard.png)

---

## ✨ Features

### Authentication & Authorization

* User registration and login
* JWT-based authentication
* Password hashing using bcrypt
* Protected routes
* Role-based access control (Admin/User)

### Task Management

* Create tasks
* View tasks
* Update tasks
* Delete tasks
* User-specific task access
* Admin access to all users' tasks

### Frontend

* Responsive UI built with React
* Axios-based API integration
* Protected client-side routes
* Authentication persistence using JWT
* Loading and error handling states

### Backend

* RESTful API architecture
* MVC pattern
* Centralized error handling
* Middleware-based authentication
* MongoDB database integration
* Scalable folder structure

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Bcrypt

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📂 Project Structure

```text
task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Gagan0014/task-manager.git

cd task-manager
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### Tasks

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| GET    | /api/task     | Get user tasks |
| POST   | /api/task     | Create task    |
| PUT    | /api/task/:id | Update task    |
| DELETE | /api/task/:id | Delete task    |

### Admin

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | /api/admin/tasks | Get all users' tasks |

---

## 🔐 Authentication

Protected routes require:

```http
Authorization: Bearer <JWT_TOKEN>
```

Workflow:

1. Register/Login
2. Receive JWT token
3. Store token on client
4. Send token in Authorization header
5. Access protected routes

---

## 📮 API Testing

The project includes a Postman collection:

```text
postman_collection.json
```

Import it into Postman to test all API endpoints.

---

## 🌐 Deployment

### Frontend

Deployed on Vercel.

### Backend

Deployed on Render.

### Environment Variables

Frontend:

```env
VITE_API_BASE_URL=https://task-manager-288g.onrender.com/api
```

Backend:

```env
PORT=5000
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret_key
```

---

## 📈 Future Improvements

* Task categories
* Task priority levels
* Due dates and reminders
* Search and filtering
* Pagination
* Dark mode
* Email notifications
* Activity logs
* Real-time updates with Socket.io

---

## 👨‍💻 Author

**Gagan**

GitHub: https://github.com/Gagan0014

LinkedIn: Add your LinkedIn profile here
