import axiosinstance from './api.js'
export const login = (data) =>axiosinstance.post("/auth/login",data);
export const register = (data) => axiosinstance.post("/auth/register",data);