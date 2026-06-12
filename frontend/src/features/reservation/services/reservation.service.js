import api from "@/services/api.config";

export const getUnavailableDates = (propertyId) => {
  return api.get(`/Reservation/property/unavailable/${propertyId}`);
};


export const createReservation = (propertyId, dto) => {
  return api.post(
    `/Reservation/property/${propertyId}`,
    dto
  );
};


export const getGuestReservations = () => {
  return api.get("/Reservation/guest-reservations");
};

export const cancelReservation = (id) => {
  return api.put(`/Reservation/${id}/cancel`);
};

export const completeReservation = (id) => {
  return api.put(`/Reservation/${id}/complete`);
};


export const getReservationsByProperty = (propertyId) => {
  return api.get(`/Reservation/property/${propertyId}`);
};
