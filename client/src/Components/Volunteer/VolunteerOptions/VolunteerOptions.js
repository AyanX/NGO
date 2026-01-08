import { TextWrap } from 'lucide-react';
import React from 'react'
import Wrapper from '../../../Assets/utils/Wrapper';
import { DonationCards } from '../../HomePage/Donation/Donation';
import { Globe, Flag, Monitor } from 'lucide-react';



const volunteerOptions = [
  {
    logo: <Globe color="var(--primary-color)" size={32} />,
    title: "Volunteer Remotely",
    content: "Contribute from anywhere in the world",
    to: "#",
    link: "Explore Opportunities",
    
    IconBgColor: "var(--secondary-color)",
    bg:"var(--dark-blue)"
  },
  {
    logo: <Flag color="var(--primary-color)" size={32} />,
    title: "Volunteer in Your Own City",
    content: "Make an impact in your local community",
    to: "#",
    link: "Explore Opportunities",
    IconBgColor: "var(--blue-color)",
    bg:"var(--darker-gray)"
  },
  {
    logo: <Monitor color="var(--primary-color)" size={32} />,
    title: "Volunteer Online",
    content: "Use your digital skills to help",
    to: "#",
    link: "Explore Opportunities",
    IconBgColor: "var(--secondary-color)",
    bg:"var(--dark-blue)",
  },
];



const VolunteerOptionsComponent = () => {
  return (
    <div>
      {DonationCards(volunteerOptions)}
    </div>
  )
}


const VolunteerOptions = () => {
    return <Wrapper component={<VolunteerOptionsComponent />}  bg="var(--dark-text)"/>
}

export default VolunteerOptions
