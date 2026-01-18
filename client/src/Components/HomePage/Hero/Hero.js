import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Hero.scss";

const AUTO_SLIDE_INTERVAL = 4000;

const Hero = ({ heroData }) => {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const totalSlides = heroData.length;
  const current = heroData[index];

  const goToSlide = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setImageLoaded(false);

    setIndex((prev) =>
      direction === "next"
        ? (prev + 1) % totalSlides
        : (prev - 1 + totalSlides) % totalSlides
    );
  };

  const nextSlide = useCallback(
    ()=> goToSlide("next"),[]
  )
  const prevSlide = () => goToSlide("prev");

  
  useEffect(() => {
    if (isAnimating) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [index, isAnimating,nextSlide]);


  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section className="hero">
      {/* Navigation */}
      <button className="nav prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>

      <button className="nav next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          className="hero-slide"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {/* Blurred placeholder */}
          {!imageLoaded && (
            <motion.div
              className="hero-image blur"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}

          {/* Background image */}
          <img
            src={current.img}
            alt={current.title}
            className="hero-image"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Gradient overlay */}
          <div className="hero-overlay" />

          {/* Text content (waits for image load) */}
          <motion.div
            className="hero-content"
            initial={{ y: "70%", opacity: 0 }}
            animate={
              imageLoaded
                ? { y: 0, opacity: 1 }
                : { y: "50%", opacity: 0 }
            }
            transition={{
              duration: 1.4,
              ease: "easeOut",
              delay: imageLoaded ? 0.1 : 0
            }}
          >
            <span className="hero-tag">{current.title}</span>
            <h1>{current.details}</h1>
            <p>{current.subtitle}</p>

            <div className="hero-buttons">
              <HashLink smooth to="/contact/#contact"><button className="primary">Register Today</button></HashLink>
              <Link to="/about"><button className="secondary">Learn More →</button></Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
