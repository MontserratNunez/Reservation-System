import { useState } from "react";
import { useCreateProperty } from "../hooks/useCreateProperty";

const CreatePropertyForm = () => {
  const { submitProperty, loading, errors } = useCreateProperty();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    capacity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitProperty({
      title: form.title,
      description: form.description || null,
      location: form.location,
      price: Number(form.price),
      capacity: Number(form.capacity),
    });
  };

  return (
    <>
      <form className="property-form" onSubmit={handleSubmit}>
        <h3>Create property</h3>

        <div className="row">
          <div className="field">
            <label>Title</label>
            <input
              name="title"
              required
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Location</label>
            <input
              name="location"
              required
              value={form.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Optional description"
          />
        </div>

        <div className="row">
          <div className="field">
            <label>Price</label>
            <input
              name="price"
              type="number"
              required
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Capacity</label>
            <input
              name="capacity"
              type="number"
              required
              value={form.capacity}
              onChange={handleChange}
            />
          </div>
        </div>

        {errors.length > 0 && (
          <div className="errors">
            <ul>
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <button className="primary" type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create property"}
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
        textarea:focus {
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

        .primary {
          background: #1976d2;
          color: white;
        }

        .primary:hover {
          background: #0860b8;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Desktop */
        @media (min-width: 768px) {
          .row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default CreatePropertyForm;