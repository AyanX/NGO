import { motion } from "framer-motion";
import "./TimeLine.scss";
import Wrapper from "../../../Assets/utils/Wrapper";


const AboutTimelineData = [
  {
    title: "Foundation Established",
    description:
      "Urban Trikcles was founded with a vision to address food insecurity and poverty in East Africa through community-driven solutions.",
  },
  {
    title: "Healthcare Initiative Launched",
    description:
      "Expanded our mission to include medical outreach programs, delivering essential healthcare services to underserved communities.",
  },
  {
    title: "Education Programs Begin",
    description:
      "Introduced scholarship programs and built schools to improve access to quality education and vocational training.",
  },
  {
    title: "Agricultural Empowerment",
    description:
      "Implemented sustainable farming programs focused on modern techniques and long-term economic independence.",
  },
  {
    title: "Regional Expansion",
    description:
      "Extended operations across multiple African regions through comprehensive community development initiatives.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

 function TimelineSection() {
  return (
    <section className="timeline">
      <div className="timeline__line" />

      <div className="timeline__items">
        {AboutTimelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline__item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="timeline__dot" />

            <div className="timeline__card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


const Timeline = () => {
    return <Wrapper component={<TimelineSection/>} bg="var(--dark-text)"/>
}

export default Timeline;