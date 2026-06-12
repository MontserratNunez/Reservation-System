import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const RegisterForm = () => {
  const { register, loading, success, errors } =
    useRegister();

  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    role: "guest",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  if (success) {
    return (
      <div className="auth-success">
        Registration successful!  
        <br />
        Please check your email to confirm your account.

        <style>{`
          .auth-success {
            max-width: 420px;
            margin: 40px auto;
            padding: 16px;
            font-size: 14px;
            color: #065f46;
            background: #dcfce7;
            border: 1px solid #86efac;
            border-radius: 8px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="field">
          <label>Username</label>
          <input
            name="userName"
            value={form.userName}
            onChange={handleChange}
            required
          />
        </div>

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

        {errors.length > 0 && (
          <div className="error">
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
          {loading ? "Registering..." : "Register"}
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

        .auth-form .error ul {
          margin: 0;
          padding-left: 16px;
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

export default RegisterForm;

