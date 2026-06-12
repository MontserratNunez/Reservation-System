import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications, onRead }) => {
  if (!notifications.length) {
    return <p>No notifications.</p>;
  }

  return (
    <div>
      {notifications.map((n) => (
        <NotificationItem
          key={n.id}
          notification={n}
          onRead={onRead}
        />
      ))}
    </div>
  );
};

export default NotificationList;