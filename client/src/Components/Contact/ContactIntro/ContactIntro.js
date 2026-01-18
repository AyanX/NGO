import React from "react";
import "./ContactIntro.scss";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import useContacts from "../../../Assets/utils/useContacts";

import customercare from "../../../Assets/customer-service.png";

const barVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactIntro = () => {
  const { contacts } = useContacts();

  const { location, email, phone } = contacts;

  const contactIntroData = [
    {
      icon: <MapPin size={28} />,
      title: "Visit Our Office",
      text: location || "location",
      sub: "Mon–Fri: 9AM – 5PM",
      className: "blue",
    },
    {
      icon: <Phone size={28} />,
      title: "Call Anytime",
      text: phone || "phone number",
      sub: "We respond within 24 hours",
      className: "orange",
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      text: email || "email address",
      sub: "Quick response guaranteed",
      className: "green",
    },
  ];

  return (
    <section className="contact">
      <div className="contact__overlay" />

      <div className="contact__content">
        {/* LEFT */}
        <div className="contact__left">
          <span className="contact__badge">
            <img
              src={customercare}
              alt="Customer Care"
              className="customer-care-icon"
            />
            We're Here to Help
          </span>

          <h1>
            Let's Connect & <br />
            <span>Create Impact</span>
          </h1>

          <p>
            Have questions? Want to volunteer or partner with us? We'd love to
            hear from you. Reach out and let's start a conversation that changes
            lives.
          </p>

          <div className="contact__actions">
            <a
              href={`mailto:${email || "email address"}`}
              className="btn primary"
            >
              <button className="btn primary">
                <MessageSquare size={16} /> Send Message
              </button>
            </a>
            <button className="btn outline">
              <PhoneCall size={16} color="var(  --blue-color)" /> Call Us Now
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact__right">
          {contactIntroData.map((item, i) => (
            <motion.div
              key={i}
              className={`info-card-contact ${item.className}`}
              variants={barVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <div className="info-icon">{item.icon}</div>

              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.sub}</span>
              </div>

              <ArrowRight className="arrow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
