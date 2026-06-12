import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createReview } from "../services/review.service";

export const useCreateReview = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitReview = async (data) => {
    try {
      setLoading(true);
      setErrors([]);

      await createReview(reservationId, data);

      navigate("/guest/reservations");
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      const apiError = err.response?.data?.message;

      console.log(apiErrors)

      if (apiErrors) {
        const messages = Object.values(apiErrors).flat();
        setErrors(messages);
      }else if(apiError){
        setErrors([apiError])
      } else {
        setErrors(["Error creating review"]);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submitReview,
    loading,
    errors,
  };
};