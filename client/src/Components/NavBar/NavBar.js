import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import "./NavBar.scss";
import logo from "../../Assets/logo.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();
  const lastRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    let difference = y - lastRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0 && y > 100);

      lastRef.current = y;
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <motion.nav
        layout
        initial="visible"
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: {
            y: "-82%",
            width: "60%",
            borderRadius: "20px",
            cursor: "pointer",
            transition: {
              duration: 0.25,
              ease: "easeIn",
            },
          },
          visible: {
            y: "0px",
            width: "100%",
            cursor: "default",
            borderRadius: "0px",
            transition: {
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1],
            },
          },
        }}
        onClick={() => {
          if (isHidden) setIsHidden(false);
        }}
        className="navbar"
        style={{ overflow: "hidden" }}
      >
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={logo} alt="NGO Logo" className="navbar-logo" />

            <button
              className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
            <div className="navbar-center">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  className="navbar-item"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <motion.div
              animate={{
                opacity: isHidden ? 0 : 1,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
              className="navbar-end"
            >
              <a className="navbar-donate-btn" href="#donate">
                Donate Now
              </a>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
