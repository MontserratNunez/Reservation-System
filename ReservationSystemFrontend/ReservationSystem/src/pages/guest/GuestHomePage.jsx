import Navbar from "@/components/Navbar";
import PropertyFilters from "@/features/property/components/PropertyFilters";
import PropertyList from "@/features/property/components/PropertyList";
import { useProperties } from "@/features/property/hooks/useProperties";

const GuestHomePage = () => {
  const { properties, applyFilters, loading } = useProperties();

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      <PropertyFilters onApply={applyFilters} />

      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <PropertyList properties={properties} />
      )}
    </div>
  );
};

export default GuestHomePage;