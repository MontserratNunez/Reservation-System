import { useEffect, useState } from "react";
import {
  getGuestReservations,
  cancelReservation,
  completeReservation,
} from "../services/reservation.service";

export const useGuestReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchReservations = async () => {
    setLoading(true);
    const response = await getGuestReservations();
    setReservations(response.data);
    setLoading(false);
  };

  const cancel = async (id) => {
    await cancelReservation(id);
    fetchReservations();
  };

  const complete = async (id) => {
    await completeReservation(id);
    fetchReservations();
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return {
    reservations,
    loading,
    cancel,
    complete,
  };
};