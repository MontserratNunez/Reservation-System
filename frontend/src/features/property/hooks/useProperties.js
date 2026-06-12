import { useEffect, useState } from "react";
import {
  getAllProperties,
  searchProperties,
} from "../services/property.service";

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    const response = await getAllProperties();
    setProperties(response.data);
    setLoading(false);
  };

  const applyFilters = async (filters) => {
    setLoading(true);
    const response = await searchProperties(filters);
    setProperties(response.data);
    setFilters(filters);
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return {
    properties,
    applyFilters,
    loading,
  };
};