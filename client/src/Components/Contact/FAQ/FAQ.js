import { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.scss";
import Wrapper from "../../../Assets/utils/Wrapper";
import { smallHeader } from "../../../Assets/utils/utils";
import useFaqs from "../../../Assets/utils/useFAQsData";
import Loader from "../../../Assets/utils/Loader";

/* const faqData = [
  {
    title: "How can I donate to Urban Trikles?",
    content:
      'You can donate through our website by clicking the "Donate Now" button. We accept various payment methods including credit cards, mobile money, and bank transfers. All donations are tax-deductible.',
  },
  {
    title: "Can I volunteer remotely?",
    content:
      "Yes! We offer remote volunteering opportunities in areas like digital marketing, content creation, fundraising, and administrative support. Visit our Join page to learn more about available positions.",
  },
  {
    title: "Where does my donation go?",
    content:
      "Your donation directly supports our programs including food distribution, medical outreach, education initiatives, and skills training. We maintain full transparency with quarterly impact reports available to all donors.",
  },
];
 */
const containerVariants = {
  hidden: { marginBottom: 60},
  visible: {
    marginBottom: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 60  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function FAQSection() {
  const { data: faqData, loading, error } = useFaqs();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <motion.div
        className="faq__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.section className="faq__title" variants={itemVariants}>
          {smallHeader("Frequently Asked Questions", "FAQ")}
        </motion.section>

        {loading || error ? (
          <Loader />
        ) : (
          <motion.div className="faq__list">
            {faqData.map((item, index) => {
              return (
                     item.status!== "draft" && <motion.div
                  className={`faq__item ${activeIndex === index ? "active" : ""}`}
                  key={index}
                  variants={itemVariants}
                >
                  <button
                    className="faq__question"
                    onClick={() => toggle(index)}
                  >
                    {item?.question}
                    <span className="faq__icon">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <motion.div
                    className="faq__answer"
                    initial={false}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default function FAQ() {
  return <Wrapper component={<FAQSection />} bg="var(--faq-bg)" />;
}
