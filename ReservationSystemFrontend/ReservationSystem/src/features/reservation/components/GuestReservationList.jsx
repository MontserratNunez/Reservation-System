import GuestReservationCard from "./GuestReservationCard";

const GuestReservationList = ({
  reservations,
  onCancel,
  onComplete,
}) => {
  if (!reservations.length) {
    return <p>You have no reservations.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {reservations.map((r) => (
        <GuestReservationCard
          key={r.id}
          reservation={r}
          onCancel={onCancel}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
};

export default GuestReservationList;