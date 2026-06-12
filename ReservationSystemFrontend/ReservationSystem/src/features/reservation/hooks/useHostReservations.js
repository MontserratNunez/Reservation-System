import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReservationsByProperty } from "../services/reservation.service";

export const useHostReservations = () => {
  const { id } = useParams(); // idProperty
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = async () => {
    setLoading(true);
    const response = await getReservationsByProperty(id);
    setReservations(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchReservations();
  }, [id]);

  return {
    reservations,
    loading,
  };
};