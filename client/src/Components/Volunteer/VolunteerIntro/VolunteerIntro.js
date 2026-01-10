import "./VolunteerIntro.scss";
import Wrapper from "../../../Assets/utils/Wrapper";
import { motion } from "framer-motion";



export default function VolunteerHero({title, description, buttonText,bg}) {
  return (
    <section className="volunteer-hero">
      <motion.div
        className="volunteer-hero__content"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>{title}</h1>

        <p>
          {description}
        </p>

        <button className="volunteer-btn">{buttonText}</button>
      </motion.div>

      <div
        className="volunteer-hero__bg"
        style={{ backgroundImage: `url(${bg})` }}
      />
    </section>
  );
}
