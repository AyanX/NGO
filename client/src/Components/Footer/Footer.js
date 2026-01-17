import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import "./Footer.scss";
import logo from "../../Assets/logo.png";
import Wrapper from "../../Assets/utils/Wrapper";
import useContacts from "../../Assets/utils/useContacts";

const FooterSection = () => {
  const { socials, contacts } = useContacts();

  const { location, email, phone } = contacts;

  const { facebook, instagram, twitter } = socials;


  const facebookUrl = facebook?.startsWith('http') ? facebook : `https://${facebook}`;
  const twitterUrl = twitter?.startsWith('http') ? twitter : `https://${twitter}`;
  const instagramUrl = instagram?.startsWith('http') ? instagram : `https://${instagram}`;
  return (
    <footer className="footer-section">
      <div className="footer-section__container">
        {/* Brand */}
        <div className="footer-section__brand">
          <div className="footer-section__logo">
            <img src={logo} alt="Uncle Tusitme Logo" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="footer-section__description">
            Dedicated to empowering communities through sustainable development,
            education, and health initiatives across East Africa.
          </p>

          <div className="footer-section__socials">
            <a
              href={facebookUrl || "#"}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              href={twitterUrl || "#"}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} />
            </a>
            <a
              href={instagramUrl || "#"}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section__contact">
          <h4>Contact Us</h4>

          <div className="footer-section__contact-item">
            <MapPin size={18} />
            <span>{location || "location"}</span>
          </div>

          <div className="footer-section__contact-item">
            <Phone size={18} />
            <span>{phone || "phone number"}</span>
          </div>

          <div className="footer-section__contact-item">
            <Mail size={18} />
            <span>{email || "email"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return <Wrapper component={<FooterSection />} bg="var(--footer-bg)" />;
};

export default Footer;
