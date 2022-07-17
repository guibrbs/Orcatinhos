import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const createSession = async (email, password) => {
  return api.post("/auth/login", {email, password})
}
