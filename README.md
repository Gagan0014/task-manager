# Task Manager (Full Stack Application)

A task management application with JWT authentication, role-based access control, and a scalable backend architecture. The project follows clean coding practices and is structured for easy scalability and future enhancements.

---

## 🚀 Live API

**Backend Base URL:**  
https://task-manager-288g.onrender.com

---

## 🛠 Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (Authentication)  
- Bcrypt (Password Hashing)  

### Frontend (Not Done Yet)
- React (Vite)

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

# frontend/ (UI under development)
```

---

## ✨ Features

### Authentication & Authorization
- User registration and login  
- JWT-based authentication  
- Role-based access control (Admin/User)  

### Task Management
- Create, read, update, and delete tasks  
- Protected routes using middleware  
- Admin access to all users' tasks  

### Backend Architecture
- Clean MVC structure  
- Centralized error handling  
- Input validation  
- Scalable and maintainable codebase  

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

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🔑 API Endpoints

### Auth Routes

| Method | Endpoint              | Description     |
|--------|----------------------|-----------------|
| POST   | /api/auth/register   | Register user   |
| POST   | /api/auth/login      | Login user      |

---

### Task Routes

| Method | Endpoint        | Description       |
|--------|----------------|-------------------|
| GET    | /api/task      | Get all tasks     |
| POST   | /api/task      | Create task       |
| PUT    | /api/task/:id  | Update task       |
| DELETE | /api/task/:id  | Delete task       |

---

### Admin Route

| Method | Endpoint            | Description                        |
|--------|--------------------|------------------------------------|
| GET    | /api/admin/tasks   | Get all users' tasks (Admin only) |

---

## 🔐 Authentication

All protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 🧪 Testing

You can test the API using:
- Postman  
- Thunder Client  
- cURL  

### Steps:
1. Register a new user  
2. Login to get JWT token  
3. Add token in request headers  
4. Access protected routes  

---

## 📮 API Documentation

Postman collection is included:

```
/postman_collection.json
```

Import it into Postman to test all endpoints.

---

## 📈 Future Enhancements

- Improved frontend UI/UX  
- State management integration  
- Pagination and filtering  
- Enhanced security (rate limiting, helmet)  
- Full-stack deployment  

---

## 👤 Author

**Gagan**  
GitHub: https://github.com/Gagan0014
