import { Mail, Users, HeartHandshake, HelpCircle } from "lucide-react";
import StatCard from "./stats/StatCard";
import ContactForm from "./forms/ContactForm";
import SocialLinksForm from "./forms/SocialLinksForm";
import "./Dashboard.scss";
import useAdminDashboard from "../utils/useDashboardData";

const Dashboard = () => {

  const { data } = useAdminDashboard();





  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard icon={Mail} title="Total Messages" value={data?.messagesCount || "-"} subtitle={`${data?.unreadMessagesCount} unread messages`} color="blue" />
        <StatCard icon={Users} title="Applications" value={data?.volunteersCount || "-"} subtitle={`${data?.pendingVolunteers} pending review`} color="green" />
        <StatCard icon={HeartHandshake} title="Active Volunteers" value={data?.approvedVolunteers || "-"} subtitle="Approved and active" color="orange" />
        <StatCard icon={HelpCircle} title="FAQs Published" value={data?.faqsCount || "-"} subtitle="Help center content" color="purple" />
      </div>

      <div className="forms">
        <ContactForm />
        <SocialLinksForm />
      </div>
    </div>
  );
};

export default Dashboard;
