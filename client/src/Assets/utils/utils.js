import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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



export const involveCards = (data,linkColor,bg="") => 
  data.map((item, index) => (
    <motion.div style={{backgroundColor:bg}} className="action-card" variants={cardVariants} key={index}>
      <div className="action-card__icon" style={{backgroundColor:item?.IconBgColor}}>
        {item?.logo}
      </div>
      <h3>{item?.title}</h3>
      <p>{item?.content}</p>
      {item?.link &&<Link style={{color:linkColor}} to={item.to} className="action-card__link">
        {item.link.toUpperCase()} <span> {item.link && "→"}</span>
      </Link>}
    </motion.div>
  ));

export const smallHeader =(title, subtitle)=>{
  return (
    <>
      <span className="smallHeader__subtitle">{subtitle.toUpperCase()}</span>
      <h2 className="smallHeader__title">{title.toUpperCase()}</h2>
    </>
  )
}


