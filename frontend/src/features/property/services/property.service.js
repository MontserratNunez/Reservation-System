import api from "@/services/api.config";

export const getAllProperties = () => {
  return api.get("/Property/Search");
};

export const searchProperties = (filters) => {
  return api.get("/Property/Search", {
    params: filters,
  });
};


export const getHostProperties = () => {
  return api.get("/Property");
};

export const createProperty = (propertyDto) => {
  return api.post("/Property", propertyDto);
};


export const getPropertyById = (id) => {
  return api.get(`/Property/${id}`);
};

export const updateProperty = (id, propertyDto) => {
  return api.put(`/Property/${id}`, propertyDto);
};

export const deleteProperty = (id) => {
  return api.delete(`/Property/${id}`);
};