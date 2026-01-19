import React from 'react'
import { HeartHandshake , Users, GraduationCap} from 'lucide-react';
import { involveCards } from '../../../Assets/utils/utils';
import Wrapper from '../../../Assets/utils/Wrapper';



import { motion } from 'framer-motion';

const DonationData = [
    {
    logo:<HeartHandshake color='var(--secondary-color)' size={32} />,
    title:"Donate To Charity",
    content:"Consider making a donation to support the less privileged people who need your support to survive.",
    to:"#",
    link:"Donate Now"
  },
  {
    logo:<Users color='var(--secondary-color)' size={32} />,
    title:"Volunteer with Us",
    content:"Volunteering with us helps transform communities and lives. Join us in making a difference today.",
    link:"Volunteer with Us",
    hashLink:"/volunteer/#volunteer"
  },
  {
    logo:<GraduationCap color='var(--secondary-color)' size={32} />,
    title:"Give Scholarship",
    content:"Give scholarships to less privileged youth and women in higher institutions. Your support can change lives.",
 
    link:"Give SCholarship",
      hashLink :"/volunteer/#volunteer",
  },
]


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

export const DonationCards = (donationData)=>{
  return <section className="action-cards">
      <motion.div
        className="action-cards__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {involveCards(donationData, "var(--secondary-color)", "var(--light-dark-bg)")}

        
      </motion.div>
    </section>
}


const DonationSection = () => {
  return DonationCards(DonationData)}

const Donation = () => {
   return <Wrapper component={<DonationSection />}  bg="var( --blue-to-white)"/>
}

export default Donation
