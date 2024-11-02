import axios, { AxiosInstance } from "axios";

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
