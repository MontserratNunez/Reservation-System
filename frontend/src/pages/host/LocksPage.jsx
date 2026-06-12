import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLocks } from "@/features/lock/hooks/useLocks";
import LockList from "@/features/lock/components/LockList";

const LocksPage = () => {
  const navigate = useNavigate();
  const { locks, loading, removeLock } = useLocks();

  return (
    <div style={{ padding: 24 }}>
      <Navbar />

      <div className="page-header">
        <h2>Property Locks</h2>

        <button className="primary-action"
          onClick={() =>
            navigate("add-lock")
          }
        >
          Add Lock
        </button>
      </div>

      {loading ? (
        <p>Loading locks...</p>
      ) : (
        <LockList locks={locks} onDelete={removeLock} />
      )}
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
      `}</style>
    </div>
  );
};

export default LocksPage;