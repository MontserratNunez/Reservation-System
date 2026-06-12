import { useState } from "react";

const PropertyFilters = ({ onApply }) => {
  const [filters, setFilters] = useState({
    location: "",
    capacity: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value || null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filters);
  };

  return (
    <>
      <form className="filters" onSubmit={handleSubmit}>
        <span className="label">Filters</span>

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          name="capacity"
          type="number"
          placeholder="Guests"
          onChange={handleChange}
        />

        <input
          name="minPrice"
          type="number"
          placeholder="Min $"
          onChange={handleChange}
        />

        <input
          name="maxPrice"
          type="number"
          placeholder="Max $"
          onChange={handleChange}
        />

        <button type="submit">Apply</button>
      </form>

      <style>{`
        .filters {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 12px 16px;
          margin-top: 16px;
          margin-bottom: 16px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
        }

        .label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin-right: 8px;
        }

        .filters input {
          padding: 6px 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          color: #111827;
          outline: none;
          width: 110px;
          transition: border-color 0.15s ease, background-color 0.15s ease;
        }

        .filters input::placeholder {
          color: #9ca3af;
        }

        .filters input:focus {
          border-color: #6366f1;
          background: #ffffff;
        }

        .filters button {
          padding: 6px 12px;
          font-size: 14px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          background: #f3f4f6;
          color: #374151;
          transition: background-color 0.15s ease;
        }

        .filters button:hover {
          background: #e5e7eb;
        }
      `}</style>
    </>
  );
};

export default PropertyFilters;
