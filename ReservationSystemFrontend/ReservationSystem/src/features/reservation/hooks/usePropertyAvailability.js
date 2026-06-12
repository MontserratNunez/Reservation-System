import { useEffect, useState } from "react";
import { getUnavailableDates } from "../services/reservation.service";

export const usePropertyAvailability = (propertyId) => {
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAvailability = async () => {
    setLoading(true);
    const response = await getUnavailableDates(propertyId);
    setUnavailableDates(response.data);
    setLoading(false);
  };

  useEffect(() => {
    if (propertyId) {
      fetchAvailability();
    }
  }, [propertyId]);

  return {
    unavailableDates,
    loading,
  };
};