import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ roles }) => {
  const { user, hasRole, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!roles.some(hasRole)) {
    if (user.roles.includes("host")) {
      return <Navigate to="/host" replace />;
    }else if (user.roles.includes("guest")){
      return <Navigate to="/guest" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;