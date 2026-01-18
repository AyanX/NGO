import { useState, useCallback } from "react";
import axios from "axios";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  location: "",
  age: "",
  category: "",
  availability: "",
  motivation: "",
  languages: "",
  confirmAccuracy: false,
  agreeConduct: false,
};

export const useVolunteerForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const submitForm = useCallback(async () => {
    if (!formData.confirmAccuracy || !formData.agreeConduct) {
      setError("You must confirm accuracy and agree to the code of conduct.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/volunteers`, formData);
      setSuccess(true);
      setFormData(INITIAL_STATE);
    } catch {
      setError("Failed to submit volunteer application.");
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    submitForm,
  };
};
