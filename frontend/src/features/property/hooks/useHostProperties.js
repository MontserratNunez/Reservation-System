import { useEffect, useState } from "react";
import { getHostProperties, deleteProperty } from "../services/property.service";

export const useHostProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHostProperties = async () => {
    setLoading(true);
    const response = await getHostProperties();
    setProperties(response.data);
    setLoading(false);
  };

  const deleteHostProperty = async (id) => {
    await deleteProperty(id);
    fetchHostProperties();
  };

  useEffect(() => {
    fetchHostProperties();
  }, []);

  return {
    properties,
    loading,
    deleteHostProperty
  };
};