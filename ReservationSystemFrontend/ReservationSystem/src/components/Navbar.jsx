import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { hasRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="nav-button" onClick={() => navigate("/notifications")}>
            Notifications
          </button>

          <button
            className="nav-button"
            onClick={() =>
              hasRole("host")
                ? navigate("/host")
                : navigate("/properties/create")
            }
          >
            {hasRole("host") ? "Manage properties" : "Register property"}
          </button>

          <button className="nav-button" onClick={() => navigate("/guest")}>
            Search properties
          </button>

          {hasRole("guest") && (
            <button
              className="nav-button"
              onClick={() => navigate("/guest/reservations")}
            >
              My reservations
            </button>
          )}
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </nav>

      {/* CSS scoped to this component */}
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        .navbar-left {
          display: flex;
          gap: 8px;
        }

        .nav-button {
          padding: 6px 10px;
          font-size: 13px;
          color: #374151;
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .nav-button:hover {
          background-color: #f3f4f6;
        }

        .logout-button {
          font-size: 13px;
          color: #6b7280;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .logout-button:hover {
          color: #ef4444;
        }
      `}</style>
    </>
  );
};

export default Navbar;



/*import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { hasRole,logout } = useAuth();
  const navigate = useNavigate();

  
  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to log out?"
    );

    if (confirmed) {
      logout();
      navigate("/login");
    }
  };


  return (
    <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
      <button onClick={() => navigate("/notifications")}>
        Notifications
      </button>

      <button onClick={() => hasRole("host") ? navigate("/host") : navigate("/properties/create")}>
        {hasRole("host") ? "Manage properties" : "Register property"}
      </button>

      <button onClick={() => navigate("/guest")}>
        Search for properties
      </button>

      
      {hasRole("guest") && (
        <button onClick={() => navigate("/guest/reservations")}>
          My reservations
        </button>
      )}

      <button onClick={handleLogout}>Log out</button>

    </nav>
  );
};

export default Navbar;*/