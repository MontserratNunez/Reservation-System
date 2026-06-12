import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginRequest } from "../services/auth.service";
import { useAuth } from "@/context/AuthContext";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await loginRequest(credentials);

      const { token, refreshToken } = response.data;
      
      const decodedToken = jwtDecode(token);
      
      const rawRoles = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      // Check string or array
      const roles = Array.isArray(rawRoles)
        ? rawRoles.map(r => r.toLowerCase())
        : [rawRoles.toLowerCase()]; //now the string is in an array

      const user = {
        name: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        roles: roles,
      };

      login({ user, accessToken: token, refreshToken });

      
      if (roles.includes("host")) {
        navigate("/host", { replace: true });
      } else if (roles.includes("guest")) {
        navigate("/guest", { replace: true });
      }

    } catch (err) {
      setError(err.response?.data?.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error };
};