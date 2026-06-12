import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { getPropertyById } from "@/features/property/services/property.service";
import AvailabilityCalendar from "@/features/reservation/components/AvailabilityCalendar";
import { usePropertyAvailability } from "@/features/reservation/hooks/usePropertyAvailability";
import ReservationForm from "@/features/reservation/components/ReservationForm";

const ReservationPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  const { unavailableDates, loading } =
    usePropertyAvailability(propertyId);

  useEffect(() => {
    const fetchProperty = async () => {
      const response = await getPropertyById(propertyId);
      setProperty(response.data);
    };

    fetchProperty();
  }, [propertyId]);

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
        </div>

      <hr />

      {loading ? (
        <p>Loading availability...</p>
      ) : (
        <AvailabilityCalendar
          unavailableDates={unavailableDates}
        />
      )}

      <hr />

      <ReservationForm />

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

export default ReservationPage;