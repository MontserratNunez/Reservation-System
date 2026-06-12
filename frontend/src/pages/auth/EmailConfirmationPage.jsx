/*import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "@/services/api.config";

const EmailConfirmationPage = () => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        await api.get("/Authentication/emailconfirmation", {
          params: Object.fromEntries(params),
        });
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    confirmEmail();
  }, [params]);

  if (status === "loading")
    return <p>Confirming email...</p>;

  if (status === "success")
    return <p>✅ Email confirmed successfully. You can now <a href="/login">log in</a>.</p>;

  return <p>❌ Email confirmation failed.</p>;
};

export default EmailConfirmationPage;*/

import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import api from "@/services/api.config";

const EmailConfirmationPage = () => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        await api.get("/Authentication/emailconfirmation", {
          params: Object.fromEntries(params),
        });
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    confirmEmail();
  }, [params]);

  return (
    <>
      <div className="confirmation-container">
        {status === "loading" && (
          <div className="card info">
            <h2>Confirming email</h2>
            <p>Please wait while we confirm your email address…</p>
          </div>
        )}

        {status === "success" && (
          <div className="card success">
            <h2>Email confirmed!</h2>
            <p>
              Your account has been successfully activated.
              You can now log in using your credentials.
            </p>

            <Link to="/login" className="primary-link">
              Go to login
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="card error">
            <h2>Confirmation failed</h2>
            <p>
              We couldn't confirm your email.
              The link may be invalid or expired.
            </p>
          </div>
        )}
      </div>

      <style>{`
        .confirmation-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #f9fafb;
        }

        .card {
          max-width: 420px;
          width: 100%;
          padding: 24px;
          border-radius: 10px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #111827;
        }

        .card p {
          margin: 0;
          font-size: 14px;
          color: #4b5563;
          line-height: 1.5;
        }

        .success {
          border-color: #86efac;
          background: #f0fdf4;
        }

        .error {
          border-color: #fca5a5;
          background: #fef2f2;
        }

        .info {
          border-color: #e5e7eb;
        }

        .primary-link {
          margin-top: 8px;
          display: inline-block;
          text-decoration: none;
          font-size: 15px;
          padding: 10px 14px;
          border-radius: 8px;
          background: #1976d2;
          color: white;
        }

        .primary-link:hover {
          background: #0860b8;
        }
      `}</style>
    </>
  );
};

export default EmailConfirmationPage;