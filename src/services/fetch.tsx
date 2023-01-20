import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config: any) => {
  return config;
});

export default api;
