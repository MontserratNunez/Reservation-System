import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPropertyById,
  updateProperty,
} from "../services/property.service";

export const useEditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState([]);

  const fetchProperty = async () => {
    try {
      const response = await getPropertyById(id);
      setProperty(response.data);
    } catch {
      setErrors("Error loading property");
    } finally {
      setLoading(false);
    }
  };

  const submitUpdate = async (data) => {
    try {
      setSaving(true);
      setErrors([]);

      await updateProperty(id, data);

      navigate("/host");
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      const apiError = err.response?.data?.message;

      if (apiErrors) {
        const messages = Object.values(apiErrors).flat();
        setErrors(messages);
      }else if(apiError){
        setErrors([apiError])
      } else {
        setErrors(["Error updating property"]);
      }
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  return {
    property,
    loading,
    saving,
    errors,
    submitUpdate,
  };
};
