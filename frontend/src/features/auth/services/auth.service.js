import api from "@/services/api.config";

export const loginRequest = (credentials) => {
  return api.post("/Authentication/login", credentials);
};

export const refreshTokenRequest = (data) => {
  return api.post("/Authentication/refresh-token", data);
};

export const registerUser = (data) => {
  return api.post("/Authentication/sing-in", data);
};
