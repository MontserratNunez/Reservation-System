/*
import { useState } from "react";
import { useAddLock } from "../hooks/useAddLock";

const AddLockForm = () => {
  const { submitLock, loading, errors } = useAddLock();

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitLock({
      startDate: new Date(form.startDate).toISOString(),
      endDate: new Date(form.endDate).toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Lock</h3>

      <label>Start Date</label>
      <input
        type="date"
        name="startDate"
        required
        value={form.startDate}
        onChange={handleChange}
      />

      <label>End Date</label>
      <input
        type="date"
        name="endDate"
        required
        value={form.endDate}
        onChange={handleChange}
      />

      {errors.length > 0 && (
            <div style={{ color: "red", marginBottom: 16 }}>
              <ul>
                {errors.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            </div>
          )}

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Create Lock"}
      </button>
    </form>
  );
};

export default AddLockForm;*/

import { useState } from "react";
import { useAddLock } from "../hooks/useAddLock";

const AddLockForm = () => {
  const { submitLock, loading, errors } = useAddLock();

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitLock({
      startDate: new Date(form.startDate).toISOString(),
      endDate: new Date(form.endDate).toISOString(),
    });
  };

  return (
    <>
      <form className="lock-form" onSubmit={handleSubmit}>
        <h3>Add lock</h3>

        {/* Dates row */}
        <div className="row">
          <div className="field">
            <label>Start date</label>
            <input
              type="date"
              name="startDate"
              required
              value={form.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>End date</label>
            <input
              type="date"
              name="endDate"
              required
              value={form.endDate}
              onChange={handleChange}
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
          disabled={loading}
        >
          {loading ? "Saving..." : "Create lock"}
        </button>
      </form>

      <style>{`
        .lock-form {
          max-width: 520px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .lock-form h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          color: #111827;
        }

        .lock-form .row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .lock-form .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .lock-form label {
          font-size: 13px;
          color: #374151;
        }

        .lock-form input {
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .lock-form input:focus {
          outline: none;
          border-color: #1976d2;
        }

        .lock-form .errors {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          border-radius: 6px;
          padding: 10px;
          font-size: 13px;
          color: #991b1b;
        }

        .lock-form .errors ul {
          margin: 0;
          padding-left: 16px;
        }

        .lock-form button {
          margin-top: 8px;
          font-size: 14px;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          width: 100%;
        }

        .lock-form .primary {
          background: #1976d2;
          color: white;
        }

        .lock-form .primary:hover {
          background: #0860b8;
        }

        .lock-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (min-width: 768px) {
          .lock-form .row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default AddLockForm;

