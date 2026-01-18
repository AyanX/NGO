import { useEffect, useState } from "react";
import axios from "axios";

const useAdminDashboard = () => {
  const [data, setData] = useState({
    messagesCount: 0,
    unreadMessagesCount: 0,
    volunteersCount: 0,
    pendingVolunteers: 0,
    faqsCount: 0,
      approvedVolunteers:0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/adm/dashboard`
        );

        if (isMounted) {
          setData({
            messagesCount: response.data?.messagesCount,
            unreadMessagesCount: response.data?.unreadMessagesCount,
            volunteersCount: response.data?.volunteersCount,
            pendingVolunteers: response.data?.pendingVolunteers,
            faqsCount: response.data?.faqsCount,
              approvedVolunteers: response.data?.approvedVolunteers,
          });
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.response?.data?.message ||
              "Failed to fetch admin dashboard data"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
};

export default useAdminDashboard;
