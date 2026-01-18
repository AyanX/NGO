import Wrapper from "../../../Assets/utils/Wrapper";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Programs.scss";
import { smallHeader } from "../../../Assets/utils/utils";

const programsData = [
  {
    id: 1,
    title: "Farmer Empowerment",
    short:
      "Our agricultural program trains local farmers in sustainable farming techniques, provides quality seeds and tools, and connects them to markets.",
    text: "Our agricultural program trains local farmers in sustainable farming techniques, provides quality seeds and tools, and connects them to markets. We've helped over 5,000 farmers increase their yields by 40% while protecting the environment. Through cooperative formation and access to microfinance, farmers gain economic independence and food security for their families and communities.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    badge: "Active Program",
    btnColor: "primary",
  },
  {
    id: 2,
    title: "Medical Outreach",
    short:
      "We bring free healthcare services, essential medical supplies, and professional health consultations to remote and underserved communities.",
    text: "Our medical outreach teams travel to the most remote areas to provide essential healthcare services, vaccinations, and maternal care. By partnering with local health authorities, we distribute life-saving medications and medical supplies to clinics that lack resources. We focus on preventative health education to ensure that communities can maintain long-term wellness even after our mobile units move to the next location.",
    image: "https://ik.imagekit.io/nal7vhb1y/NGO/medium-shot-smiley-farmer-cornfield-1.jpg",
    badge: "Active Program",
    btnColor: "blue",
  },
  {
    id: 3,
    title: "Widows & Orphans",
    short:
      "We provide comprehensive support for vulnerable families, including quality education, safe housing, and professional vocational training.",
    text: "Our mission for widows and orphans focuses on restoring hope and providing a path to self-sufficiency. We cover full educational scholarships for children and provide vocational training for widows to help them start small businesses. Beyond financial aid, we offer a community support system that includes counseling and mentorship, ensuring that every individual feels valued and empowered to build a stable professional future.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    badge: "Active Program",
    btnColor: "orange",
  },
  {
    id: 4,
    title: "Skills Training",
    short:
      "Our vocational programs are designed to equip youth and adults with high-demand skills to create sustainable livelihoods and economic growth.",
    text: "We bridge the unemployment gap by offering specialized training in technical skills, digital literacy, and entrepreneurship. Our modern training centers provide hands-on experience with the tools and technologies used in today’s job market. After graduation, we connect our students with local businesses for internships and job placement, fostering a new generation of skilled professionals who contribute to the economic development of their regions.",
    image: "https://ik.imagekit.io/nal7vhb1y/NGO/medium-shot-smiley-farmer-cornfield-1.jpg",
    badge: "Active Program",
    btnColor: "green",
  },
];



const ProgramsSection = () => {
  const [curr, setCurr] = useState(1);
  const [programs, setPrograms] = useState(programsData);

  const nextProgram = () => {
    setCurr((prev) => (prev % programs.length) + 1);

    // Rotate Array (Move first element to the end)
    setPrograms((prevPrograms) => {
      const [first, ...rest] = prevPrograms;
      return [...rest, first];
    });
  };

  const prevProgram = () => {
    setCurr((prev) => (prev % programs.length) + 1);

    // Rotate Array backwards (Move last element to the front)
    setPrograms((prevPrograms) => {
      const last = prevPrograms[prevPrograms.length - 1];
      const rest = prevPrograms.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <section className="programs">

      {smallHeader("WHAT WE OFFER","Our Successful Programs")}

      {/* TOP SECTION */}
      {programs.map(
        (item) =>
          item.id === curr && (
            <div className="programs__top" key={item.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="programs__top-image"
              >
                <img src={item.image} alt={item.title} />
                {item.badge && <span className="badge">{item.badge}</span>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="programs__top-content"
              >
                <div className="programs__top-content-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="programs__top-content-description">
                  <p>{item.text}</p>
                </div>
                <div className="actions">
                  <Link to="#" className={`btn ${item.btnColor}`}>
                    Learn More →
                  </Link>

                  <button onClick={prevProgram} className="nav-btn">
                    {<ChevronLeft />}
                  </button>
                  <button onClick={nextProgram} className="nav-btn">
                    {<ChevronRight />}
                  </button>
                </div>
              </motion.div>
            </div>
          )
      )}
      {/* BOTTOM PROGRAMS */}
      <div className="programs__grid">
        {
          programs.map(
          (item) => {
            return (
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
                <p>{item.short}</p>
                <Link to="#" className={`btn ${item.btnColor}`}>
                  Read More
                </Link>
              </motion.div>
            )
            )
          }
        )
        }
      </div>
    </section>
  );
};

const Programs = () => {
  return <Wrapper component={<ProgramsSection />} bg="var(--gray-bg)" />;
};

export default Programs;
