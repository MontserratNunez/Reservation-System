import { useEffect, useState } from "react";
import {
  getAllNotifications,
  markAsRead,
} from "../services/notification.service";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {
    setLoading(true);
    const response = await getAllNotifications();
    setNotifications(response.data);
    setLoading(false);
  };

  const readNotification = async (id) => {
    await markAsRead(id);
    fetchNotifications();
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,
    loading,
    readNotification,
  };
};