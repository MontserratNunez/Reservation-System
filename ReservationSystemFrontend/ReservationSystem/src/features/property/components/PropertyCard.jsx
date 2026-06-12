import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRating } from "@/features/review/services/review.service";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchRating = async () => {
      const response = await getRating(property.id);
      setRating(response.data);
    };

    fetchRating();
  }, [property.id]);

  if (!rating) return <p className="loading">Loading property…</p>;

  return (
    <>
      <div className="property-card">

        <div className="card-header">
          <h3>{property.title}</h3>
          <span className="price">${property.price}</span>
        </div>

        <p className="description">{property.description}</p>

        <div className="meta">
          <span>
            {!rating || rating.totalReviews === 0
              ? "No reviews"
              : `${rating.averageRating} ⭐ (${rating.totalReviews})`}
          </span>
          <span>{property.location}</span>
          <span>{property.capacity} guests</span>
        </div>

        <div className="divider" />

        <div className="actions">
          <button
            className="primary"
            onClick={() => navigate(`/guest/reserve/${property.id}`)}
          >
            Reserve
          </button>
          <button
            className="secondary"
            onClick={() => navigate(`/properties/${property.id}`)}
          >
            Details
          </button>
        </div>
      </div>

      <style>{`
        .property-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card-header {
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

        .price {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .description {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.4;
          text-align: justify;
        }

        .meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 13px;
          color: #6b7280;
        }

        .divider {
          height: 1px;
          background: #e5e7eb;
          margin: 6px 0;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        button {
          font-size: 13px;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          border: none;
          transition: background-color 0.15s ease;
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

        .loading {
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>
    </>
  );
};

export default PropertyCard;
