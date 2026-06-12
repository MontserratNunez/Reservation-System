import api from "@/services/api.config";

export const createReview = (reservationId, dto) => {
  return api.post("/Review", dto, {
    params: { reservationId }
  });
};

export const getRating = (propertyId) => {
  return api.get("/Review/rating", {
    params: { propertyId }
  })
}


export const getReviewsByProperty = (propertyId) => {
  return api.get("/Review", {
    params: { propertyId },
  });
};
