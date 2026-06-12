import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { addLock } from "../services/lock.service";

export const useAddLock = () => {
    const { id: propertyId } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const submitLock = async (data) => {
        try {
            setLoading(true);
            setErrors([]);

            await addLock(propertyId, data);

            navigate(-1);
        } catch (err) {
            const apiErrors = err.response?.data?.errors;
            const apiError = err.response?.data?.message;
            if (apiErrors) {
                const messages = Object.values(apiErrors).flat();
                setErrors(messages);
            }else if(apiError){
                setErrors([apiError])
            } else {
                setErrors(["Error creating lock"]);
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        submitLock,
        loading,
        errors,
    };
};