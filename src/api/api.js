// src/services/api.js
import axios from "axios";

// Use import.meta.env for Vite, or window._env_ for custom setups
const API_BASE_URL =
  typeof import.meta !== "undefined" &&
  import.meta.env &&
  import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : "https://konnectd-vid-admin-backend.vercel.app/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// API functions
export const subAccountAPI = {
  getAll: () => api.get("/sub-accounts"),
  getUsers: (userLocationId, page = 1, limit = 10) =>
    api.get(
      `/sub-accounts/${userLocationId}/users?page=${page}&limit=${limit}`
    ),
};

export const userAPI = {
  getHistory: (userId, page = 1, limit = 10) =>
    api.get(`/users/${userId}/history?page=${page}&limit=${limit}`),
};

export default api;
