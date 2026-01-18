import { Link } from "react-router";
import {
  Mail,
  Users,
  MessageSquare,
  Eye,
  Zap,
} from "lucide-react";
import "./QuickActions.scss";

const actions = [
  {
    title: "View Messages",
    description: "Check new inquiries",
    icon: Mail,
    color: "blue",
    to: "/messages",
  },
  {
    title: "Review Applications",
    description: "Approve volunteers",
    icon: Users,
    color: "green",
    to: "/volunteer-applications",
  },
  {
    title: "Manage FAQs",
    description: "Edit help content",
    icon: MessageSquare,
    color: "purple",
    to: "/faqs",
  },
  {
    title: "View Website",
    description: "See public site",
    icon: Eye,
    color: "orange",
    to: "/",
  },
];

const QuickActions = () => {
  return (
    <section className="quick-actions">
      <header className="quick-actions__header">
        <Zap  color="orange" size={20} />
        <h3>Quick Actions</h3>
      </header>

      <div className="quick-actions__grid">
        {actions.map(({ title, description, icon: Icon, color, to }) => (
          <Link key={title} to={to} className="action-card">
            <div className={`action-icon ${color}`}>
              <Icon size={22} />
            </div>

            <div className="action-content">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
