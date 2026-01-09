import React from 'react'
import ContactIntro from './ContactIntro/ContactIntro'
import ContactForm from './Form/Form'
import ContactOptions from './ContactOptions/ContactOptions'
import FAQ from './FAQ/FAQ'

const Contact = () => {
  return (
    <div>
        <ContactIntro/>
        <ContactForm/>
        <ContactOptions/>
        <FAQ/>
    </div>
  )
}

export default Contact