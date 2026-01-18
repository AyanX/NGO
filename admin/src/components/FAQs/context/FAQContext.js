import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  getAllFAQs,
  createFAQ,
  updateFAQ,
  deleteFAQ,
  unpublishFAQ,
} from "../api/api.js";

export const FAQContext = createContext(null);

export const FAQProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFAQs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const {data , err}= await getAllFAQs();
      if(data){
        setFaqs(data);
      } else {
        setFaqs([]);
      }
      if(err){
        setError(err);
      }
    } catch (err) {
      console.error("Error fetching FAQs:", err);
      setError("an error occurred while fetching FAQs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFAQs();
  }, [loadFAQs]);

  const addFAQ = useCallback(async (faqData) => {
    try {
      const newFAQ = await createFAQ(faqData);
      if (newFAQ) {
        setFaqs((prev) => [newFAQ, ...prev]);
      }
      return newFAQ;
    } catch (err) {
      throw new Error("Failed to create FAQ");
    }
  }, []);

  const editFAQ = useCallback(async (id, faqData) => {
    try {
      const updatedFAQ = await updateFAQ(id, faqData);
      if (updatedFAQ) {
        setFaqs((prev) => prev?.map((faq) => (faq?.id === id ? updatedFAQ : faq)) || []);
      }
      return updatedFAQ;
    } catch (err) {
      throw new Error("Failed to update FAQ");
    }
  }, []);

  const removeFAQ = useCallback(async (id) => {
    try {
      await deleteFAQ(id);
      setFaqs((prev) => prev?.filter((faq) => faq?.id !== id) || []);
    } catch (err) {
      throw new Error("Failed to delete FAQ");
    }
  }, []);

  const unpublish = useCallback(async (id) => {
    try {
      const updatedFAQ = await unpublishFAQ(id);
      if (updatedFAQ) {
        setFaqs((prev) => prev?.map((faq) => (faq?.id === id ? updatedFAQ : faq)) || []);
      }
      return updatedFAQ;
    } catch (err) {
      throw new Error("Failed to unpublish FAQ");
    }
  }, []);

  const stats = useMemo(() => {
    const published = faqs ? faqs?.filter((faq) => faq?.status === "published")?.length : 0;
    const draft = faqs ? faqs?.filter((faq) => faq?.status === "draft")?.length : 0;
    return {
      published,
      draft,
      total: faqs?.length || 0,
    };
  }, [faqs]);

  const value = useMemo(
    () => ({
      faqs,
      loading,
      error,
      stats,
      addFAQ,
      editFAQ,
      removeFAQ,
      unpublish,
      refreshFAQs: loadFAQs,
    }),
    [
      faqs,
      loading,
      error,
      stats,
      addFAQ,
      editFAQ,
      removeFAQ,
      unpublish,
      loadFAQs,
    ],
  );

  return <FAQContext.Provider value={value}>{children}</FAQContext.Provider>;
};
