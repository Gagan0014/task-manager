import api from './axiosInstance'

export const getTasks = ()=> api.get("/tasks");
export const createTask = (data) => api.post("/tasks",data);
export const updateTask = (id,data) => api.post(`/tasks/${id}`,data);
export const deleteTask = (id) => api.delete(`tasks/${id}`);