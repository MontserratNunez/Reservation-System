import Navbar from "@/components/Navbar";
import { useNotifications } from "@/features/notification/hooks/useNotifications";
import NotificationList from "@/features/notification/components/NotificationList";

const NotificationPage = () => {
  const { notifications, loading, readNotification } = useNotifications();

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      <h2>Notifications</h2>

      {loading ? (
        <p>Loading notifications...</p>
      ) : (
        <NotificationList
          notifications={notifications}
          onRead={readNotification}
        />
      )}
      <style>{`
        h2 {
          text-align: justify;
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 20px;
          font-weight: 500;
          color: #111827;
        }
      `}</style>
    </div>
  );
};

export default NotificationPage;