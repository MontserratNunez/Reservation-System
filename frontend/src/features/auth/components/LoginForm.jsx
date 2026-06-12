import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const { signIn, loading, error } = useLogin();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(form);
  };

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <div className="field">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <button
          className="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <style>{`
        .auth-form {
          max-width: 420px;
          margin: 0 auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .auth-form h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 500;
          color: #111827;
          text-align: center;
        }

        .auth-form .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .auth-form label {
          text-align: justify;
          font-size: 13px;
          color: #374151;
        }

        .auth-form input {
          padding: 10px 12px;
          font-size: 14px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .auth-form input:focus {
          outline: none;
          border-color: #1976d2;
        }

        .auth-form .error {
          background: #fee2e2;
          border: 1px solid #fca5a5;
          border-radius: 6px;
          padding: 10px;
          font-size: 13px;
          color: #991b1b;
        }

        .auth-form button {
          margin-top: 8px;
          width: 100%;
          font-size: 15px;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }

        .auth-form .primary {
          background: #1976d2;
          color: white;
        }

        .auth-form .primary:hover {
          background: #0860b8;
        }

        .auth-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default LoginForm;