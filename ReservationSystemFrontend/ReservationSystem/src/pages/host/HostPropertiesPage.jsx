import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useHostProperties } from "@/features/property/hooks/useHostProperties";
import HostPropertyList from "@/features/property/components/HostPropertyList";

const HostPropertiesPage = () => {
  const navigate = useNavigate();
  const { properties, loading, deleteHostProperty } =
    useHostProperties();

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      <main className="page">

        <div className="page-header">
          <h2>My Properties</h2>

          <button
            className="primary-action"
            onClick={() => navigate("/properties/create")}
          >
            Add Property
          </button>
        </div>

        {loading ? (
          <p className="loading">Loading properties...</p>
        ) : (
          <HostPropertyList
            properties={properties}
            onDelete={deleteHostProperty}
          />
        )}
      </main>

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
        }

        h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: #111827;
        }

        .primary-action {
          padding: 8px 14px;
          font-size: 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          background: #1976d2;
          color: white;
          transition: background-color 0.15s ease;
        }

        .primary-action:hover {
          background: #0860b8;
        }

        .loading {
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default HostPropertiesPage;

