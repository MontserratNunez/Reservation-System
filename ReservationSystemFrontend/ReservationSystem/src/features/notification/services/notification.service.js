
import api from "@/services/api.config";

export const getAllNotifications = () => {
  return api.get("/Notification/all");
};

export const getNotificationById = (id) => {
  return api.get(`/Notification/${id}`);
};

export const markAsRead = (id) => {
  return api.put(`/Notification/${id}/read`);
};
