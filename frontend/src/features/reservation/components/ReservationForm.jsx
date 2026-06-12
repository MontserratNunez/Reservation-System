import { useState } from "react";
import { useCreateReservation } from "../hooks/useCreateReservation";

const ReservationForm = () => {
  const { submitReservation, loading, errors } =
    useCreateReservation();

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    guestQuantity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitReservation({
      startDate: new Date(form.startDate).toISOString(),
      endDate: new Date(form.endDate).toISOString(),
      guestQuantity: Number(form.guestQuantity),
    });
  };

  return (
    <>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <h3>Make a reservation</h3>

        <div className="fields-row">
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

          <div className="field">
            <label>Guests</label>
            <input
              type="number"
              name="guestQuantity"
              required
              min={1}
              value={form.guestQuantity}
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
          {loading ? "Reserving..." : "Reserve"}
        </button>
      </form>

      <style>{`
        
        .reservation-form {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }


        h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          color: #111827;
        }

        
        .fields-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }


        label {
          text-align: justify;
          font-size: 13px;
          color: #374151;
        }

        input {
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        input:focus {
          outline: none;
          border-color: #1976d2;
        }

        .errors {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          border-radius: 6px;
          padding: 10px;
          font-size: 13px;
          color: #991b1b;
        }

        .errors ul {
          margin: 0;
          padding-left: 16px;
        }

        button {
          margin-top: 8px;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
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

        @media (min-width: 768px) {
          
          .fields-row {
            grid-template-columns: 1fr 1fr 1fr;
          }

        }
      `}</style>
    </>
  );
};

export default ReservationForm;