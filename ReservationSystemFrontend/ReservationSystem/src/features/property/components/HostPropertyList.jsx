/*import HostPropertyCard from "./HostPropertyCard";

const HostPropertyList = ({ properties, onDelete}) => {
  if (!properties.length) {
    return <p>You have no properties yet.</p>;
  }

  return (
    <div>
      {properties.map((property) => (
        <HostPropertyCard
          key={property.id}
          property={property}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default HostPropertyList;*/

import HostPropertyCard from "./HostPropertyCard";

const HostPropertyList = ({ properties, onDelete }) => {
  if (!properties.length) {
    return <p>You have no properties yet.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {properties.map((property) => (
        <HostPropertyCard
          key={property.id}
          property={property}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default HostPropertyList;