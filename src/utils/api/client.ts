import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // if later you use HttpOnly cookies
});

// Optional: attach token from localStorage if you're storing it there
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    // config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
