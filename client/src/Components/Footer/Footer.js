import React from "react";
import { Link } from "react-router-dom";
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

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="Uncle Tusitme Logo" />
          </div>

          

        </div>

        {/* Quick Links */}
        <div>
          <p className="footer__description">
            Dedicated to empowering communities through sustainable development,
            education, and health initiatives across East Africa.
          </p>

          <div className="footer__socials">
            <Link to="#" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
            <Link to="#" aria-label="Twitter">
              <Twitter size={18} />
            </Link>
            <Link to="#" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h4>Contact Us</h4>

          <div className="footer__contact-item">
            <MapPin size={18} />
            <span>
              Palm Drive street, Runda Plot 208, Nairobi, Kenya
            </span>
          </div>

          <div className="footer__contact-item">
            <Phone size={18} />
            <span>+254 712 345 678</span>
          </div>

          <div className="footer__contact-item">
            <Mail size={18} />
            <span>info@uncletusitme.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = ()=>{
  return <Wrapper component={<FooterSection/>} bg="var(--footer-bg)"/>
}


export default Footer;
