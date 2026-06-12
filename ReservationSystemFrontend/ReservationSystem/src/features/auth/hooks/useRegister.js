import { useState } from "react";
import { registerUser } from "../services/auth.service";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const register = async (form) => {
    try {
      setLoading(true);
      setErrors([]);

      await registerUser({
        userName: form.userName,
        email: form.email,
        password: form.password,
        clientUri: "http://localhost:5173/email-confirmation",
      });

      setSuccess(true);
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      const apiError = err.response?.data?.message;

      if (apiErrors) {
        const messages = Object.values(apiErrors).flat();
        setErrors(messages);
      }else if(apiError){
        setErrors([apiError])
      } else {
        setErrors(["Registration failed"]);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    success,
    errors,
  };
};