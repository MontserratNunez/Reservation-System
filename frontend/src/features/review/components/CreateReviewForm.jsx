import { useState } from "react";
import { useCreateReview } from "../hooks/useCreateReview";

const CreateReviewForm = () => {
  const { submitReview, loading, errors } = useCreateReview();

  const [form, setForm] = useState({
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitReview({
      rating: Number(form.rating),
      comment: form.comment || null,
    });
  };

  return (
    <>
      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Leave a review</h3>

        <div className="field narrow">
          <label>Rating</label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} ★
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>Comment</label>
          <textarea
            name="comment"
            placeholder="Write your review…"
            value={form.comment}
            onChange={handleChange}
          />
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

        <button
          className="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Submit review"}
        </button>
      </form>

      <style>{`
        .review-form {
          max-width: 520px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        h3 {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 20px;
          font-weight: 500;
          color: #111827;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .field.narrow {
          max-width: 140px;
        }

        label {
          text-align: justify;
          font-size: 13px;
          color: #374151;
        }

        select,
        textarea {
          padding: 8px 10px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
        }

        select:focus,
        textarea:focus {
          outline: none;
          border-color: #1976d2;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
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
      `}</style>
    </>
  );
};

export default CreateReviewForm;