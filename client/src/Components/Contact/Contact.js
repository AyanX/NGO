import React from "react";
import ContactIntro from "./ContactIntro/ContactIntro";
import ContactForm from "./Form/Form";
import ContactOptions from "./ContactOptions/ContactOptions";
import FAQ from "./FAQ/FAQ";
import { contactPageHelmet } from "../../helmet";

const Contact = () => {
  return (
    <div>
      {contactPageHelmet()}
      <ContactIntro />
      <ContactForm />
      <ContactOptions />
      <FAQ />
    </div>
  );
};

export default Contact;
