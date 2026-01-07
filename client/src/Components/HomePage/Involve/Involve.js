import React from "react";
import Wrapper from "../../../Assets/utils/Wrapper";
import "./Involve.scss";

import { HandHeart, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { involveCards } from "../../../Assets/utils/utils";

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


const InvolveData = [
  {
    logo:<HandHeart size={28} />,
    title:"Donate Now",
    content:"Your contribution directly supports vital programs and emergency aid.",
    to:"#",
    link:"MAKE A DONATION"
  },
  {
    logo:<Users size={28} />,
    title:"Join Us Now",
    content:"Become a member of our community and help drive positive change.",
    to:"#",
    link:"BECOME A MEMBER",
  },
  {
    logo:<Rocket size={28} />,
    title:"Get Involved",
    content:"Volunteer your time and skills to make a tangible difference.",
    to:"#",
    link:"START VOLUNTEERING",
  }
]




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
        {involveCards(InvolveData)}

        
      </motion.div>
    </section>
  );
};

const Involve = () => {
  return <Wrapper component={<InvolveComponent />} bg="var(--background-color)" />;
};

export default Involve;