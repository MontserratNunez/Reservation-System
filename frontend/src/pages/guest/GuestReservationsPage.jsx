import Navbar from "@/components/Navbar";
import { useGuestReservations } from "@/features/reservation/hooks/useGuestReservations";
import GuestReservationList from "@/features/reservation/components/GuestReservationList";

const GuestReservationsPage = () => {
  const {
    reservations,
    loading,
    cancel,
    complete,
  } = useGuestReservations();

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      <h2>My Reservations</h2>

      {loading ? (
        <p>Loading reservations...</p>
      ) : (
        <GuestReservationList
          reservations={reservations}
          onCancel={cancel}
          onComplete={complete}
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

export default GuestReservationsPage;