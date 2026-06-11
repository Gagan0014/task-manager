import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://task-manager-288g.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  register: (email, password, name) =>
    axiosInstance.post('/auth/register', { email, password, name }),
  
  login: (email, password) =>
    axiosInstance.post('/auth/login', { email, password }),
};

export const taskService = {
  getTasks: () => axiosInstance.get('/task'),
  
  createTask: (taskData) => axiosInstance.post('/task', taskData),
  
  updateTask: (id, taskData) => axiosInstance.put(`/task/${id}`, taskData),
  
  deleteTask: (id) => axiosInstance.delete(`/task/${id}`),
};

export const adminService = {
  getAllTasks: () => axiosInstance.get('/admin/tasks'),
};

export default axiosInstance;
