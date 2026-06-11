import api from './axiosInstance'

export const getTasks = ()=> api.get("/task");
export const createTask = (data) => api.post("/task",data);
export const updateTask = (id,data) => api.post(`/task/${id}`,data);
export const deleteTask = (id) => api.delete(`task/${id}`);
export const getAllTasks = () => api.get("/admin/tasks");