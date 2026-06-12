import axiosInstance from './api.js'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getTasks = () => axiosInstance.get(`${API_BASE_URL}/task`);
export const createTask = (data) => axiosInstance.post(`${API_BASE_URL}/task`, data);
export const updateTask = (id, data) => axiosInstance.put(`${API_BASE_URL}/task/${id}`, data);
export const deleteTask = (id) => axiosInstance.delete(`${API_BASE_URL}/task/${id}`);
export const getAllTasks = () => axiosInstance.get(`${API_BASE_URL}/admin/tasks`);