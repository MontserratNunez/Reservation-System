import { useNavigate } from "react-router-dom";

const HostPropertyCard = ({ property, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      onDelete(property.id);
    }
  };

  return (
    <>
      <div className="host-card">
 
        <div className="host-card-header">
          <h3>{property.title}</h3>
          <span className="price">${property.price}</span>
        </div>

        <div className="meta">
          <span>{property.location}</span>
          <span>{property.capacity} guests</span>
        </div>

        <div className="divider" />

        <div className="actions">
          <button
            className="secondary"
            onClick={() =>
              navigate(`/host/properties/${property.id}/reservations`)
            }
          >
            Reservations
          </button>

          <button
            className="secondary"
            onClick={() =>
              navigate(`/host/properties/${property.id}/locks`)
            }
          >
            Lock dates
          </button>

          <button
            className="secondary"
            onClick={() =>
              navigate(`/host/properties/${property.id}/edit`)
            }
          >
            Edit
          </button>

          <button className="danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <style>{`
        .host-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .host-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
          color: #111827;
        }

        .price {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .meta {
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: #6b7280;
        }

        .divider {
          height: 1px;
          background: #e5e7eb;
          margin: 6px 0;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        button {
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .secondary {
          background: #f3f4f6;
          color: #374151;
        }

        .secondary:hover {
          background: #e5e7eb;
        }

        .danger {
          background: transparent;
          color: #ef4444;
        }

        .danger:hover {
          background: #fee2e2;
        }
      `}</style>
    </>
  );
};

export default HostPropertyCard;


/*
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "@/components/ConfirmModal";

const HostPropertyCard = ({ property, onDelete }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  /*const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      onDelete(property.id);
    }
  };

  return (
    <>
      <div className="host-card">

        <div className="host-card-header">
          <h3>{property.title}</h3>
          <span className="price">${property.price}</span>
        </div>

        <div className="meta">
          <span>{property.location}</span>
          <span>{property.capacity} guests</span>
        </div>

        <div className="divider" />

        <div className="actions">
          <button
            className="secondary"
            onClick={() =>
              navigate(`/host/properties/${property.id}/reservations`)
            }
          >
            Reservations
          </button>

          <button
            className="secondary"
            onClick={() =>
              navigate(`/host/properties/${property.id}/locks`)
            }
          >
            Lock dates
          </button>

          <button
            className="secondary"
            onClick={() =>
              navigate(`/host/properties/${property.id}/edit`)
            }
          >
            Edit
          </button>

          <button className="danger" onClick={() => setOpen(true)}>
            Delete
          </button>
        </div>
      </div>

      
      <ConfirmModal
        open={open}
        title="Delete property"
        description="This action cannot be undone. All reservations and related data will be permanently removed."
        confirmText="Delete"
        onCancel={() => setOpen(false)}
        onConfirm={() => onDelete(property.id)}
      />


      <style>{`
        .host-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .host-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 500;
          color: #111827;
        }

        .price {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .meta {
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: #6b7280;
        }

        .divider {
          height: 1px;
          background: #e5e7eb;
          margin: 6px 0;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        button {
          font-size: 13px;
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .secondary {
          background: #f3f4f6;
          color: #374151;
        }

        .secondary:hover {
          background: #e5e7eb;
        }

        .danger {
          background: transparent;
          color: #ef4444;
        }

        .danger:hover {
          background: #fee2e2;
        }
      `}</style>
    </>
  );
};

export default HostPropertyCard;*/



/*import { useNavigate } from "react-router-dom";

const HostPropertyCard = ({ property, onDelete }) => {
  const navigate = useNavigate();
  
  const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete this property?");

        if (confirmed) {
        onDelete(property.id);
        }
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}>
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>
        <strong>Price:</strong> ${property.price}
      </p>
      <p>
        <strong>Capacity:</strong> {property.capacity}
      </p>

      <button onClick={() => navigate(`/host/properties/${property.id}/reservations`)}> See reservations </button>

      <button onClick={() => navigate(`/host/properties/${property.id}/locks`)}>Lock date</button>

      <button onClick={() => navigate(`/host/properties/${property.id}/edit`)}> Edit </button>

      <button onClick={handleDelete}> Delete </button>
    </div>
  );
};

export default HostPropertyCard;*/