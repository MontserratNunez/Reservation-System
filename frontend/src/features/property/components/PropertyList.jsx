import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties }) => {
  if (!properties.length) {
    return <p className="empty">There are no properties.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;