import React from "react";
import { motion } from "framer-motion";
import "./Vision.scss";

import Wrapper from "../../../Assets/utils/Wrapper";
import {
  HandCoins,
  Utensils,
  HeartPulse,
  BookOpen,
  Briefcase,
  Scale,
} from "lucide-react";
import { smallHeader } from "../../../Assets/utils/utils";

const goals = [
  { title: "No Poverty", icon: <HandCoins  /> },
  { title: "Zero Hunger", icon: <Utensils /> },
  { title: "Good Health", icon: <HeartPulse /> },
  { title: "Quality Education", icon: <BookOpen /> },
  { title: "Decent Work", icon: <Briefcase /> },
  { title: "Reduced Inequalities", icon: <Scale /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const SDGs = () => {
  return (
    <section className="sdgs">
    {smallHeader("OUR GOALS", "Sustainable Development Goals")}


      <motion.div
        className="sdgs__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            className="sdgs__card"
            variants={itemVariants}
          >
            <div className="sdgs__icon">{goal.icon}</div>
            <p>{goal.title.toUpperCase()}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Vision = () => {
  return (
    <Wrapper component={<SDGs />} bg='var(--background-color)'/>
      
  );
};

export default Vision;
