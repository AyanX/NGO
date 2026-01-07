import { motion } from "framer-motion";
import "./AboutIntro.scss";
import missionImage from "../../../Assets/thumbnails/water.webp";
import Wrapper from "../../../Assets/utils/Wrapper";
import { smallHeader } from "../../../Assets/utils/utils";
import { RiCompass3Line, RiEyeOffLine } from "@remixicon/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const imageVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const missionVisionData = [
  {
    type: "mission",
    icon: <RiCompass3Line size={30} className="text-white" />,
    title: "Our Mission",
    text: `To transform lives and empower communities across Africa by
    providing comprehensive support in food security, healthcare,
    education, and economic development. We believe every individual
    deserves dignity, opportunity, and hope for a better future.`,
  },
  {
    type: "vision",
    icon: <RiEyeOffLine />,
    title: "Our Vision",
    text: `A thriving Africa where communities are self-sufficient, children
    have access to quality education, families enjoy good health, and
    sustainable livelihoods enable prosperity for generations to come.`,
  },
];

function renderInfoCards(data) {
  return data.map(({ type, icon, title, text }) => (
    <div className="info-card" key={type}>
      <div className="info-card__header">
        <div className={`icon ${type}`}>{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  ));
}

function MissionVision() {
  return (
    <>
      {smallHeader(
        "Discover our purpose and aspirations.",
        "Our Mission & Vision"
      )}

      <section className="mission-vision">
        <motion.div
          className="mission-vision__container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <motion.div
            className="mission-vision__image-wrapper"
            variants={imageVariants}
          >
            <img src={missionImage} alt="Empowered African women" />
            <span className="image-accent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="mission-vision__content"
            variants={contentVariants}
          >
            {renderInfoCards(missionVisionData)}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

const AboutIntro = () => {
  return <Wrapper component={<MissionVision />} bg="var(--gray-bg)" />;
};

export default AboutIntro;
