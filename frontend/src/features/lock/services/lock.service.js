import api from "@/services/api.config";

export const getPropertyLocks = (propertyId) => {
  return api.get(`/Lock/property/${propertyId}`);
};

export const addLock = (propertyId, dto) => {
  return api.post(`/Lock/property/${propertyId}`, dto);
};

export const deleteLock = (lockId) => {
  return api.delete(`/Lock/property/${lockId}`);
};