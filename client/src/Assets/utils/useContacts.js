import { useEffect, useState } from "react";
import axios from "axios";

const useContacts = () => {
  const [socials, setSocials] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let isMounted = true;

    const fetchSocials = async () => {
      try {
        setLoading(true);

        const socials = await axios.get(`${API}/socials`);
        const contacts = await axios.get(`${API}/contacts`);

        if (isMounted) {
          setSocials(socials.data);
          setContacts(contacts.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
        
          setError(err.response?.data?.message || "Failed to fetch FAQs");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSocials();

    return () => {
      isMounted = false;
    };
  }, [API]);

  return { socials, contacts, loading, error };
};

export default useContacts;
