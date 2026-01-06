import React from "react";
import Wrapper from "../../../Assets/utils/Wrapper";
import "./Involve.scss";
import { Link } from "react-router-dom";
import { HandHeart, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

/* Container animation */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

/* Individual card animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const InvolveComponent = () => {
  return (
    <section className="action-cards">
      <motion.div
        className="action-cards__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="action-card" variants={cardVariants}>
          <div className="action-card__icon">
            <HandHeart size={28} />
          </div>
          <h3>Donate Now</h3>
          <p>
            Your contribution directly supports vital programs and emergency aid.
          </p>
          <Link to="#" className="action-card__link">
            MAKE A DONATION <span>→</span>
          </Link>
        </motion.div>

        <motion.div className="action-card" variants={cardVariants}>
          <div className="action-card__icon">
            <Users size={28} />
          </div>
          <h3>Join Us Now</h3>
          <p>
            Become a member of our community and help drive positive change.
          </p>
          <Link to="#" className="action-card__link">
            BECOME A MEMBER <span>→</span>
          </Link>
        </motion.div>

        <motion.div className="action-card" variants={cardVariants}>
          <div className="action-card__icon">
            <Rocket size={28} />
          </div>
          <h3>Get Involved</h3>
          <p>
            Volunteer your time and skills to make a tangible difference.
          </p>
          <Link to="#" className="action-card__link">
            START VOLUNTEERING <span>→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Involve = () => {
  return <Wrapper component={<InvolveComponent />} bg="var(--background-color)" />;
};

export default Involve;