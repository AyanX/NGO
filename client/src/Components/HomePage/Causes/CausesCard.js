import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1],
    },
  },
};

export default function CausesCard({ data }) {
  const progress = Math.min((data.raised / data.goal) * 100, 100);

  return (
    <motion.article className="campaign-card" variants={cardVariants}>
      <div className="image-wrapper">
        <img src={data.image} alt={data.title} />
        <span className="tag">{data.tag}</span>
      </div>

      <div className="content">
        <h3>{data.title}</h3>

        <div className="amounts">
          <span>
            Raised: <strong style={{color:"var(--darker-gray)", fontWeight:"bold"}}  >${data.raised.toLocaleString()}</strong>
          </span>
          <span>
            Goal: <strong style={{color:"var(--darker-gray)", fontWeight:"bold"}} >${data.goal.toLocaleString()}</strong>
          </span>
        </div>

        <motion.div
          className="progress-bar"
          initial={{ width: "0%" }}
          whileInView={{ width: `${progress}%` }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
        />

        <button className="donate-btn">Donate Now</button>
      </div>
    </motion.article>
  );
}
