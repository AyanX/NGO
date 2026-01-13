import { Mail, Users, HeartHandshake, HelpCircle } from "lucide-react";
import StatCard from "./stats/StatCard";
import ContactForm from "./forms/ContactForm";
import SocialLinksForm from "./forms/SocialLinksForm";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard icon={Mail} title="Total Messages" value="8" subtitle="5 unread messages" color="blue" />
        <StatCard icon={Users} title="Applications" value="10" subtitle="5 pending review" color="green" />
        <StatCard icon={HeartHandshake} title="Active Volunteers" value="5" subtitle="Approved and active" color="orange" />
        <StatCard icon={HelpCircle} title="FAQs Published" value="12" subtitle="Help center content" color="purple" />
      </div>

      <div className="forms">
        <ContactForm />
        <SocialLinksForm />
      </div>
    </div>
  );
};

export default Dashboard;
