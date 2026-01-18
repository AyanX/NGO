import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const involveCards = (data, linkColor, bg = "") =>
  data.map((item, index) => {
    const emailLink = !item.toEmail ? item?.link?.toUpperCase() : item?.link;
    const cardBgColor = item?.bg || bg;

    const isLink = item.hashLink && !item.to;

    return (
      <motion.div
        style={{ backgroundColor: cardBgColor }}
        className="action-card"
        variants={cardVariants}
        key={index}
      >
        <div
          className="action-card__icon"
          style={{ backgroundColor: item?.IconBgColor }}
        >
          {item?.logo}
        </div>
        <h3>{item?.title}</h3>
        <p>{item?.content}</p>
        {!isLink ? (
          <Link
            style={{ color: linkColor }}
            to={item.to}
            className="action-card__link"
          >
            {emailLink}
            <span> {item.link && "→"}</span>
          </Link>
        ) : (
          <HashLink
            style={{ color: linkColor }}
            to={item.hashLink}
            className="action-card__link"
            smooth
            scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
          >
            {emailLink}
          </HashLink>
        )}
      </motion.div>
    );
  });

export const smallHeader = (title, subtitle) => {
  return (
    <>
      <span className="smallHeader__subtitle">{subtitle.toUpperCase()}</span>
      <h2 className="smallHeader__title">{title.toUpperCase()}</h2>
    </>
  );
};
