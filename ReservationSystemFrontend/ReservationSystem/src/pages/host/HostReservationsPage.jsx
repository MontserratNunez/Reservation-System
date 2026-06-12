import Navbar from "@/components/Navbar";
import { useHostReservations } from "@/features/reservation/hooks/useHostReservations";
import HostReservationList from "@/features/reservation/components/HostReservationList";

const HostReservationsPage = () => {
  const { reservations, loading } = useHostReservations();

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      <h2>Property Reservations</h2>

      {loading ? (
        <p>Loading reservations...</p>
      ) : (
        <HostReservationList reservations={reservations} />
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

export default HostReservationsPage;