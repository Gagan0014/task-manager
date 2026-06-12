import axiosinstance from './api.js'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const login = (data) =>axiosinstance.post(`${API_BASE_URL}/auth/login`, data);
export const register = (data) => axiosinstance.post(`${API_BASE_URL}/auth/register`, data);