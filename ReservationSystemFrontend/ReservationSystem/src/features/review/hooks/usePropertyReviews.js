import { useEffect, useState } from "react";
import { getRating } from "../services/review.service";
import { getReviewsByProperty } from "../services/review.service";

export const usePropertyRating = (propertyId) => {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRating = async () => {
      const response = await getRating(propertyId);
      setRating(response.data);
      setLoading(false);
    };

    fetchRating();
  }, [propertyId]);

  return { rating, loading };
};


export const usePropertyReviews = (propertyId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await getReviewsByProperty(propertyId);
      setReviews(response.data);
      setLoading(false);
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  return {
    reviews,
    loading,
  };
};
