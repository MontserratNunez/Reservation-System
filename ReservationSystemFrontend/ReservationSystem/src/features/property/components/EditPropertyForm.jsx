/*import { useEffect, useState } from "react";
import { useEditProperty } from "../hooks/useEditProperty";

const EditPropertyForm = () => {
  const {
    property,
    loading,
    saving,
    errors,
    submitUpdate,
  } = useEditProperty();

  const [form, setForm] = useState({});

  useEffect(() => {
    if (property) {
      setForm({
        title: property.title,
        description: property.description || "",
        location: property.location,
        price: property.price,
        capacity: property.capacity,
      });
    }
  }, [property]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitUpdate({
      title: form.title,
      description: form.description || null,
      location: form.location,
      price: Number(form.price),
      capacity: Number(form.capacity),
    });
  };

  if (loading) return <p>Loading property...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Property</h3>

      <input name="title" value={form.title} onChange={handleChange}/>

      <textarea name="description" value={form.description} onChange={handleChange}/>

      <input name="location" value={form.location} onChange={handleChange}/>

      <input name="price" type="number" value={form.price} onChange={handleChange}/>

      <input name="capacity" type="number" value={form.capacity} onChange={handleChange}/>

      {errors.length > 0 && (
            <div style={{ color: "red", marginBottom: 16 }}>
              <ul>
                {errors.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            </div>
          )}

      <button type="submit" disabled={saving}> {saving ? "Saving..." : "Save changes"} </button>
    </form>
  );
};

export default EditPropertyForm;*/

import { useEffect, useState } from "react";
import { useEditProperty } from "../hooks/useEditProperty";

const EditPropertyForm = () => {
  const {
    property,
    loading,
    saving,
    errors,
    submitUpdate,
  } = useEditProperty();

  const [form, setForm] = useState({});

  useEffect(() => {
    if (property) {
      setForm({
        title: property.title,
        description: property.description || "",
        location: property.location,
        price: property.price,
        capacity: property.capacity,
      });
    }
  }, [property]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitUpdate({
      title: form.title,
      description: form.description || null,
      location: form.location,
      price: Number(form.price),
      capacity: Number(form.capacity),
    });
  };

  if (loading) return <p>Loading property...</p>;

  return (
    <>
      <form className="property-form" onSubmit={handleSubmit}>
        <h3>Edit property</h3>

        {/* Row 1 */}
        <div className="row">
          <div className="field">
            <label>Title</label>
            <input
              name="title"
              value={form.title || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Location</label>
            <input
              name="location"
              value={form.location || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="field">
          <label>Description</label>
          <textarea
            name="description"
            value={form.description || ""}
            onChange={handleChange}
          />
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="field">
            <label>Price</label>
            <input
              name="price"
              type="number"
              value={form.price || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Capacity</label>
            <input
              name="capacity"
              type="number"
              value={form.capacity || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="errors">
            <ul>
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit */}
        <button
          className="primary"
          type="submit"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      </form>

      <style>{`
        .property-form {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .property-form h3 {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 20px;
          font-weight: 500;
          color: #111827;
        }

        .property-form .row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .property-form .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .property-form label {
          font-size: 13px;
          color: #374151;
        }

        .property-form input,
        .property-form textarea {
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .property-form textarea {
          min-height: 90px;
          resize: vertical;
        }

        .property-form input:focus,
        .property-form textarea:focus {
          outline: none;
          border-color: #1976d2;
        }

        .property-form .errors {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          border-radius: 6px;
          padding: 10px;
          font-size: 13px;
          color: #991b1b;
        }

        .property-form .errors ul {
          margin: 0;
          padding-left: 16px;
        }

        .property-form button {
          margin-top: 8px;
          font-size: 14px;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          width: 100%;
        }

        .property-form .primary {
          background: #1976d2;
          color: white;
        }

        .property-form .primary:hover {
          background: #0860b8;
        }

        .property-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (min-width: 768px) {
          .property-form .row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default EditPropertyForm;