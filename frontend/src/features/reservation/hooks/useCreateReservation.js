import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { createReservation } from "../services/reservation.service";

export const useCreateReservation = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitReservation = async (data) => {
    try {
      setLoading(true);
      setErrors([]);

      await createReservation(propertyId, data);

      navigate("/guest/reservations");
    } catch (err) {
      
      const apiErrors = err.response?.data?.errors;
      const apiError = err.response?.data?.message;

      if (apiErrors) {
        const messages = Object.values(apiErrors).flat();
        setErrors(messages);
      }else if(apiError){
        setErrors([apiError])
      } else {
        setErrors(["Error creating reservation"]);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submitReservation,
    loading,
    errors,
  };
};
