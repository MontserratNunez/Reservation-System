import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../services/property.service";
import { useAuth } from "@/context/AuthContext";

export const useCreateProperty = () => {
  const navigate = useNavigate();
  const { addRole } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitProperty = async (data) => {
    try {
      setLoading(true);
      setErrors([]);

      await createProperty(data);
      addRole("host");
      navigate("/host");
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      const apiError = err.response?.data?.message;

      if (apiErrors) {
        const messages = Object.values(apiErrors).flat();
        setErrors(messages);
      }else if(apiError){
        setErrors([apiError])
      } else {
        setErrors(["Error creating property"]);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submitProperty,
    loading,
    errors,
  };
};