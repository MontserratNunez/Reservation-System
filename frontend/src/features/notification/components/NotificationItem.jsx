
const NotificationItem = ({ notification, onRead }) => {
  const formattedDate = new Date(notification.createdAt).toLocaleString(
    "es-DO",
    {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <div className="notificationCard"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        border: "1px solid #ddd",
        borderLeft: notification.isRead
          ? "4px solid #ccc"
          : "4px solid #1976d2",
        padding: 14,
        marginBottom: 12,
        backgroundColor: notification.isRead ? "#f9f9f9" : "#fff",
        borderRadius: 6,
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 6,
        }}
      >
        {!notification.isRead ? (
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "#1976d2",
            }}
          >
            Unread
          </span>
        ) : (
          <span />
        )}

        <span
          style={{
            fontSize: 11,
            color: "#888",
            textAlign: "right",
          }}
        >
          {formattedDate}
        </span>
      </div>

      <p
        style={{
          margin: "4px 0 10px",
          fontSize: 14,
          fontWeight: 500,
          color: "#222",
          lineHeight: 1.4,
          textAlign: "left",
        }}
      >
        {notification.message}
      </p>

      {!notification.isRead && (
        <button onClick={() => onRead(notification.id)}> Mark as read </button>
      )}

        <style>{`
        .notificationCard button {
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
          background: #f3f4f6;
          color: #374151;
          max-width: 100px;
        }

        .notificationCard button:hover {
          background: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default NotificationItem;
