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
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handles text + checkbox inputs safely
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const nextStep = useCallback(() => {
    setStep(2);
  }, []);

  const prevStep = useCallback(() => {
    setStep(1);
  }, []);

  const submitForm = useCallback(async () => {
    if (!formData.confirmAccuracy || !formData.agreeConduct) {
      setError("You must confirm accuracy and agree to the code of conduct.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/volunteers`,
        formData
      );
      setSuccess(true);
      setFormData(INITIAL_STATE);
      setStep(1);
    } catch {
      setError("Failed to submit volunteer application.");
    } finally {
      setLoading(false);
    }
  }, [formData]);

  return {
    formData,
    step,
    loading,
    error,
    success,
    handleChange,
    nextStep,
    prevStep,
    submitForm,
  };
};
