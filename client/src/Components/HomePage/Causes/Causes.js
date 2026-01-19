import React from "react";
import { motion } from "framer-motion";
import CausesCard from "./CausesCard";
import "./Causes.scss";
import Wrapper from "../../../Assets/utils/Wrapper";
import { smallHeader } from "../../../Assets/utils/utils";

import education from "../../../Assets/education.webp";
import water from "../../../Assets/water.webp";
import hunger from "../../../Assets/food.webp";

const causes = [
  {
    id: 1,
    tag: "Water & Sanitation",
    title: "Clean Water",
    raised: 12847,
    goal: 20000,
    image: water,
  },
  {
    id: 2,
    tag: "Education",
    title: "Education for All",
    raised: 18234,
    goal: 25000,
    image: education,
  },
  {
    id: 3,
    tag: "Food & Hunger",
    title: "Feed the Hungry",
    raised: 9567,
    goal: 15000,
    image: hunger,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function CausesCampaigns() {
  return (

   <>
     {smallHeader("support our cause", "How You Can Help")}
     <motion.section
      className="campaigns"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {causes.map((item) => (
        <CausesCard key={item.id} data={item} />
      ))}
    </motion.section>
   </>
  );
}


const Causes = () => {
    return <Wrapper component={<CausesCampaigns/>} bg="var(--dark-text)"/>;
}

export default Causes;