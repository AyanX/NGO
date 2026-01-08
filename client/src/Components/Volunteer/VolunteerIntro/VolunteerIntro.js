import "./VolunteerIntro.scss"
import Wrapper from "../../../Assets/utils/Wrapper"
import { motion } from "framer-motion";
import education from "../../../Assets/education.webp"


export default function VolunteerHero() {
  return (
    <section className="volunteer-hero">
      <motion.div
        className="volunteer-hero__content"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>BECOME A VOLUNTEER</h1>

        <p>
          Are you passionate about making a difference? Join our team of
          dedicated volunteers and help us change lives across Africa.
        </p>

        <button className="volunteer-btn">
          BECOME A VOLUNTEER
        </button>
      </motion.div>

      <div
        className="volunteer-hero__bg"
        style={{ backgroundImage: `url(${education})` }}
      />
    </section>
  );
};
