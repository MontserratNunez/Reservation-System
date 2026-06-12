import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPropertyLocks,
  deleteLock,
} from "../services/lock.service";

export const useLocks = () => {
  const { id: propertyId } = useParams();
  const [locks, setLocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLocks = async () => {
    setLoading(true);
    const response = await getPropertyLocks(propertyId);
    setLocks(response.data);
    setLoading(false);
  };

  const removeLock = async (lockId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lock?"
    );

    if (confirmed) {
      await deleteLock(lockId);
      fetchLocks();
    }
  };

  useEffect(() => {
    fetchLocks();
  }, [propertyId]);

  return {
    locks,
    loading,
    removeLock,
  };
};