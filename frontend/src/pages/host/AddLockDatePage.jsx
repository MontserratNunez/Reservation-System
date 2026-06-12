import Navbar from "@/components/Navbar";
import AddLockForm from "@/features/lock/components/AddLockForm";
import AvailabilityCalendar from "@/features/reservation/components/AvailabilityCalendar";
import { usePropertyAvailability } from "@/features/reservation/hooks/usePropertyAvailability";
import { useParams } from "react-router-dom";

const AddLockDatePage = () => {
  const { id: propertyId } = useParams();
  const { unavailableDates, loading } =
    usePropertyAvailability(propertyId);

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      {loading ? (
        <p>Loading availability...</p>
      ) : (
        <AvailabilityCalendar
          unavailableDates={unavailableDates}
        />
      )}

      
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "24px 0",
        }}
      />


      <AddLockForm />
    </div>
  );
};

export default AddLockDatePage;