import { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  Home,
  Mail,
  Users,
  MessageSquare,
  LogOut,
  Menu,
  X,
  UserCog,
  Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./AdminNavbar.scss";

const navLinks = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Messages", icon: Mail, to: "/messages" },
  { label: "Volunteers", icon: Users, to: "/volunteer-applications" },
  { label: "FAQs", icon: MessageSquare, to: "/faqs" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "Exit", icon: LogOut, to: "#" },
];

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div>
      {/* Top Navbar */}
      <nav className="admin-navbar">
        <div className="nav-left">
          <UserCog className="brand-icon" />
          <span>Admin Dashboard</span>
        </div>

        <div className="nav-links">
          {navLinks.map(({ label, icon: Icon, to }) => (
            <Link key={label} to={to} className="nav-link">
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.aside
              className="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35 }}
            >
              <div className="mobile-header">
                <span>Admin Dashboard</span>
                <X onClick={() => setOpen(false)} />
              </div>

              {navLinks.map(({ label, icon: Icon, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="mobile-link"
                  onClick={() => setOpen(false)}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
            </motion.aside>

            {/* Overlay */}
            <motion.div
              className="overlay"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
    <div>{<Outlet />}</div>
    </>
  );
};

export default AdminNavbar;
