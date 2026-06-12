const HostReservationCard = ({ reservation }) => {
  const STATUS_LABELS = {
    0: "Confirmed",
    1: "Completed",
    2: "Canceled",
  };

  return (
    <div className="reservation-card">

      <div className="header">
        <span className="guest">{reservation.guestName}</span>
        <span className={`status status-${reservation.status}`}>
          {STATUS_LABELS[reservation.status]}
        </span>
      </div>

      <div className="dates">
        <span>
          <strong>From:</strong>{" "}
          {new Date(reservation.startDate).toDateString()}
        </span>
        <span>
          <strong>To:</strong>{" "}
          {new Date(reservation.endDate).toDateString()}
        </span>
      </div>

      <p className="meta">
        <strong>Guests:</strong> {reservation.guestQuantity}
      </p>

      <style>{`
        .reservation-card {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 14px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .guest {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .status {
          font-size: 12px;
          padding: 3px 8px;
          border-radius: 12px;
          font-weight: 500;
        }

        .status-0 {
          background: #e0f2fe;
          color: #0369a1;
        }

        .status-1 {
          background: #dcfce7;
          color: #166534;
        }

        .status-2 {
          background: #fee2e2;
          color: #991b1b;
        }

        .dates {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 13px;
          color: #374151;
        }

        .meta {
          font-size: 13px;
          color: #374151;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default HostReservationCard;