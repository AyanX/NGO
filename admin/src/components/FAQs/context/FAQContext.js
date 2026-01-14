import { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { getAllFAQs, createFAQ, updateFAQ, deleteFAQ, unpublishFAQ } from '../api/api.js';

export const FAQContext = createContext(null);

export const FAQProvider = ({ children }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFAQs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllFAQs();
      setFaqs(data);
    } catch (err) {
      setError(err.message);
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
      setFaqs(prev => [newFAQ, ...prev]);
      return newFAQ;
    } catch (err) {
      throw new Error('Failed to create FAQ');
    }
  }, []);

  const editFAQ = useCallback(async (id, faqData) => {
    try {
      const updatedFAQ = await updateFAQ(id, faqData);
      setFaqs(prev => prev.map(faq => faq.id === id ? updatedFAQ : faq));
      return updatedFAQ;
    } catch (err) {
      throw new Error('Failed to update FAQ');
    }
  }, []);

  const removeFAQ = useCallback(async (id) => {
    try {
      await deleteFAQ(id);
      setFaqs(prev => prev.filter(faq => faq.id !== id));
    } catch (err) {
      throw new Error('Failed to delete FAQ');
    }
  }, []);

  const unpublish = useCallback(async (id) => {
    try {
      const updatedFAQ = await unpublishFAQ(id);
      setFaqs(prev => prev.map(faq => faq.id === id ? updatedFAQ : faq));
      return updatedFAQ;
    } catch (err) {
      throw new Error('Failed to unpublish FAQ');
    }
  }, []);

  const stats = useMemo(() => {
    const published = faqs.filter(faq => faq?.status === 'published').length;
    const draft = faqs.filter(faq => faq?.status === 'draft').length;
    return {
      published,
      draft,
      total: faqs.length
    };
  }, [faqs]);

  const value = useMemo(() => ({
    faqs,
    loading,
    error,
    stats,
    addFAQ,
    editFAQ,
    removeFAQ,
    unpublish,
    refreshFAQs: loadFAQs
  }), [faqs, loading, error, stats, addFAQ, editFAQ, removeFAQ, unpublish, loadFAQs]);

  return (
    <FAQContext.Provider value={value}>
      {children}
    </FAQContext.Provider>
  );
};
