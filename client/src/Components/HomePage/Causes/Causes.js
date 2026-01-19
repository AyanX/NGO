import React from "react";
import { motion } from "framer-motion";
import CausesCard from "./CausesCard";
import "./Causes.scss";
import Wrapper from "../../../Assets/utils/Wrapper";
import { smallHeader } from "../../../Assets/utils/utils";

const causes = [
  {
    id: 1,
    tag: "Water & Sanitation",
    title: "Clean Water",
    raised: 12847,
    goal: 20000,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 2,
    tag: "Education",
    title: "Education for All",
    raised: 18234,
    goal: 25000,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 3,
    tag: "Emergency",
    title: "Emergency Relief",
    raised: 9567,
    goal: 15000,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
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