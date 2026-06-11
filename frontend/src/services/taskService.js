import axiosInstance from './api.js'

export const getTasks = () => axiosInstance.get("/task");
export const createTask = (data) => axiosInstance.post("/task", data);
export const updateTask = (id, data) => axiosInstance.put(`/task/${id}`, data);
export const deleteTask = (id) => axiosInstance.delete(`/task/${id}`);
export const getAllTasks = () => axiosInstance.get("/admin/tasks");