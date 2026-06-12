import { useNavigate } from "react-router-dom";

const GuestReservationCard = ({
  reservation,
  onCancel,
  onComplete,
}) => {
  const navigate = useNavigate();

  const STATUS_LABELS = {
    0: "Confirmed",
    1: "Completed",
    2: "Canceled",
  };

  const today = new Date();
  const endDate = new Date(reservation.endDate);

  const canCancel = reservation.status === 0;
  const canReview = reservation.status === 1 && !reservation.hasReview;
  const canComplete = reservation.status === 0 && endDate < today;

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      onCancel(reservation.id);
    }
  };

  return (
    <div className="reservation-card">

      <div className="header">
        <h3>{reservation.propertyTitle}</h3>
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

      <div className="divider" />

      <div className="actions">
        {canCancel && (
          <button className="secondary" onClick={handleCancel}>
            Cancel
          </button>
        )}

        {canComplete && (
          <button
            className="primary"
            onClick={() => onComplete(reservation.id)}
          >
            Complete
          </button>
        )}

        {canReview && (
          <button
            className="primary"
            onClick={() =>
              navigate(`/guest/review/${reservation.id}`)
            }
          >
            Add review
          </button>
        )}

        {reservation.hasReview && (
          <span className="reviewed">Reviewed</span>
        )}
      </div>

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

        h3 {
          margin: 0;
          font-size: 16px;
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
          text-align: justify;
          font-size: 13px;
          color: #374151;
          margin: 0;
        }

        .divider {
          height: 1px;
          background: #e5e7eb;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        button {
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        .primary {
          background: #1976d2;
          color: white;
        }

        .primary:hover {
          background: #0860b8;
        }

        .secondary {
          background: #f3f4f6;
          color: #374151;
        }

        .secondary:hover {
          background: #e5e7eb;
        }

        .reviewed {
          font-size: 12px;
          color: #059669;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default GuestReservationCard;