import { useEffect, useState } from "react";
import axios from "axios";

const useVolunteers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = process.env.REACT_APP_API_URL
  useEffect(() => {
    let isMounted = true;

    const fetchVolunteers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${api}/volunteers`
        );

        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to fetch volunteers"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchVolunteers();

    return () => {
      isMounted = false;
    };
  }, [api]);

  return { data, loading, error };
};

export default useVolunteers;
