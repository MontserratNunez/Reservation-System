

/*
const LockCard = ({ lock, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 12,
        marginBottom: 10,
      }}
    >
      <p>
        <strong>From:</strong>{" "}
        {new Date(lock.startDate).toDateString()}
      </p>

      <p>
        <strong>To:</strong>{" "}
        {new Date(lock.endDate).toDateString()}
      </p>

      <button onClick={() => onDelete(lock.id)}>
        Delete
      </button>
    </div>
  );
};

export default LockCard;
*/

const LockCard = ({ lock, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this lock?")) {
      onDelete(lock.id);
    }
  };

  return (
    <div className="lock-card">
      <div className="dates">
        <span>
          <strong>From:</strong>{" "}
          {new Date(lock.startDate).toDateString()}
        </span>

        <span>
          <strong>To:</strong>{" "}
          {new Date(lock.endDate).toDateString()}
        </span>
      </div>

      <button className="danger" onClick={handleDelete}>
        Delete
      </button>

      <style>{`
        .lock-card {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px 14px;
          margin-bottom: 10px;
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .dates {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          color: #374151;
        }

        button {
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        .danger {
          background: transparent;
          color: #ef4444;
        }

        .danger:hover {
          background: #fee2e2;
        }
      `}</style>
    </div>
  );
};

export default LockCard;
