import React from "react";
import { FAQProvider } from './context/FAQContext';
import ManageFAQs from './components/ManageFAQs/ManageFAQs';


const FAQs = () => {
  return (
    <div>
      <FAQProvider>
        <ManageFAQs />
      </FAQProvider>
    </div>
  );
};

export default FAQs;
