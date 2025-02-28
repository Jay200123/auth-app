import axios from "axios";
import { useStore } from "../store";

export const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
