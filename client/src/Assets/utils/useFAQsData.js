import { useEffect, useState } from "react";
import axios from "axios";

const useFaqs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = process.env.REACT_APP_API_URL


  useEffect(() => {
    let isMounted = true;

    const fetchFaqs = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `${API}/faqs`
        );

        if (isMounted) {
          setData(res.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to fetch FAQs"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchFaqs();

    return () => {
      isMounted = false;
    };
  }, [API]);

  return { data, loading, error };
};

export default useFaqs;
