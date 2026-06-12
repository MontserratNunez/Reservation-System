import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getPropertyById } from "@/features/property/services/property.service";
import { usePropertyRating } from "@/features/review/hooks/usePropertyReviews";
import AvailabilityCalendar from "@/features/reservation/components/AvailabilityCalendar";
import { usePropertyAvailability } from "@/features/reservation/hooks/usePropertyAvailability";
import { usePropertyReviews } from "@/features/review/hooks/usePropertyReviews";
import ReviewList from "@/features/review/components/ReviewList";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const { rating, loading: ratingLoading } = usePropertyRating(id);
  const { unavailableDates, loading } = usePropertyAvailability(id);

  const { reviews, loading: reviewsLoading } = usePropertyReviews(id);

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await getPropertyById(id);
      setProperty(response.data);
    };

    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading property...</p>;

  return (
    <div style={{ padding: 24 }}>
      <Navbar />
        <div className="property-page">

          <h2 className="header">{property.title}</h2>

          <p className="description">{property.description}</p>

          <div className="meta">
            <span><strong>Location:</strong> {property.location}</span>
            <span><strong>Capacity:</strong> {property.capacity}</span>
            <span><strong>Price:</strong> ${property.price}</span>
          </div>


          <div className="rating">
            {ratingLoading ? (
              <p>Loading rating...</p>
            ) : (
              <p>
                <strong>Rating:</strong>{" "}
                {rating.totalReviews === 0
                  ? "No reviews"
                  : `${rating.averageRating} ⭐ (${rating.totalReviews})`}
              </p>
            )}
          </div>
        </div>

      <div className="divider" />

      {loading ? (
        <p>Loading availability...</p>
      ) : (
        <AvailabilityCalendar
          unavailableDates={unavailableDates}
        />
      )}

      <br />

      <div className="cta">
          <button
            className="primary"
            onClick={() =>
              navigate(`/guest/reserve/${property.id}`)
            }
          >
            Make reservation
          </button>
        </div>

      <div className="divider" />

      {reviewsLoading ? (
        <p style={{ fontSize: 100}}>Loading reviews...</p>
      ) : (
        <ReviewList reviews={reviews} />
      )}

      <style>{`
        .property-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          display: flex;
          text-align: center;
          flex-direction: column;
          gap: 10px;
          color: red;
        }

        .header{
          font-size: 22px;
          font-weight: 600;
          color: #111827;
        }

        .description {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.5;
        }

        .meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          font-size: 14px;
          color: #374151;
        }

        .rating {
          font-size: 14px;
          color: #374151;
        }

        .divider {
          height: 1px;
          background: #e5e7eb;
          margin: 12px 0;
        }

        .cta {
          display: flex;
        }

        .cta button {
          width: 100%;
          padding: 10px 14px;
          font-size: 15px;
          border-radius: 8px;
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

        
      `}</style>

    </div>
  );
};

export default PropertyDetailPage;