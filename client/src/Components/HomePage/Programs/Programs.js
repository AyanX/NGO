import Wrapper from "../../../Assets/utils/Wrapper";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Programs.scss";

const programsData = [
  {
    id: 1,
    title: "Farmer Empowerment",
    text: "Our agricultural program trains local farmers in sustainable farming techniques, provides quality seeds and tools, and connects them to markets. We've helped over 5,000 farmers increase their yields by 40% while protecting the environment.Through cooperative formation and access to microfinance, farmers gain economic independence and food security for their families and communities.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    badge: "Active Program",
    btnColor: "primary",
  },
  {
    id: 2,
    title: "Medical Outreach",
    text: "Free healthcare services and medical supplies to remote communities.",
    image: "https://images.unsplash.com/photo-1580281657527-47b9d7d3f9b3",
    btnColor: "blue",
  },
  {
    id: 3,
    title: "Widows & Orphans",
    text: "Comprehensive support including education and vocational training.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    btnColor: "orange",
  },
  {
    id: 4,
    title: "Skills Training",
    text: "Vocational programs to create sustainable livelihoods.",
    image: "https://images.unsplash.com/photo-1581091012184-5c7c94c4b3c8",
    btnColor: "green",
  },
];

const imageVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

const contentVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const cardVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ProgramsSection = () => {
  const [curr, setCurr] = useState(1);
  const [programs, setPrograms] = useState(programsData);
  const length = programs.length;

  const nextProgram = () => {
    setCurr((prev) => (prev % programs.length) + 1);

    // 2. Rotate Array (Move first element to the end)
    setPrograms((prevPrograms) => {
      const [first, ...rest] = prevPrograms;
      return [...rest, first];
    });
  };

  const prevProgram = () => {
    setCurr((prev) => (prev % programs.length) + 1);

    // 2. Rotate Array backwards (Move last element to the front)
    setPrograms((prevPrograms) => {
      const last = prevPrograms[prevPrograms.length - 1];
      const rest = prevPrograms.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <section className="programs">
      <span className="programs__subtitle">WHAT WE OFFER</span>
      <h2 className="programs__title">Our Successful Programs</h2>

      {/* TOP FEATURE */}
      <div className="programs__top">
        {/* TOP SECTION */}
        {programs.map(
          (item) =>
            item.id === curr && (
              <AnimatePresence mode="wait" key={item.id}>
                <motion.div
                  className="programs__top"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="programs__top-image">
                    <img src={item.image} alt={item.title} />
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </div>

                  <div className="programs__top-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <div className="actions">
                      <Link to="#" className={`btn ${item.btnColor}`}>
                        Learn More →
                      </Link>

                      <button onClick={prevProgram} className="nav-btn">
                        ‹
                      </button>
                      <button onClick={nextProgram} className="nav-btn">
                        ›
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )
        )}
      </div>

      {/* BOTTOM PROGRAMS */}
      <div className="programs__grid">
        {programs.map(
          (item) =>
            item.id !== curr && (
              <motion.div
                key={item.id}
                className="programs__card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="image-wrap">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                <Link to="#" className={`btn ${item.btnColor}`}>
                  Read More
                </Link>
              </motion.div>
            )
        )}
      </div>
    </section>
  );
};

const Programs = () => {
  return <Wrapper component={<ProgramsSection />} bg="var(--gray-bg)" />;
};

export default Programs;
