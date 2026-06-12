import api from "./api.config";
import { refreshTokenRequest } from "@/features/auth/services/auth.service";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(p => {
    error ? p.reject(error) : p.resolve(token);
  });
  failedQueue = [];
};

export const setupInterceptors = () => {

  api.interceptors.request.use((config) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth?.accessToken) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
    }
    return config;
  });

  api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      if (
        originalRequest.url.includes("/Authentication/login") ||
        originalRequest.url.includes("/Authentication/refresh-token") ||
        originalRequest.url.includes("/Authentication/register")
      ) {
        return Promise.reject(error);
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: token => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                resolve(api(originalRequest));
              },
              reject,
            });
          });
        }

        isRefreshing = true;

        try {
          const auth = JSON.parse(localStorage.getItem("auth"));

          const response = await refreshTokenRequest({
            token: auth.accessToken,
            refreshToken: auth.refreshToken,
          });

          auth.accessToken = response.data.token;
          auth.refreshToken = response.data.refreshToken;

          localStorage.setItem("auth", JSON.stringify(auth));

          processQueue(null, auth.token);

          originalRequest.headers.Authorization = `Bearer ${auth.token}`;
          return api(originalRequest);
        } catch (err) {
          processQueue(err);
          localStorage.removeItem("auth");
          window.location.href = "/login";
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
};
