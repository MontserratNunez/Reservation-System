import HostReservationCard from "./HostReservationCard";

const HostReservationList = ({ reservations }) => {
  if (!reservations.length) {
    return <p>No reservations for this property.</p>;
  }

  return (
    <div>
      {reservations.map((r) => (
        <HostReservationCard
          key={r.id}
          reservation={r}
        />
      ))}
    </div>
  );
};

export default HostReservationList;
