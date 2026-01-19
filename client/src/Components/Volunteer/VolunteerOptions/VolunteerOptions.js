
import Wrapper from '../../../Assets/utils/Wrapper';
import { DonationCards } from '../../HomePage/Donation/Donation';
import { Globe, Flag, Monitor } from 'lucide-react';



const volunteerOptions = [
  {
    logo: <Globe color="white" size={32} />,
    title: "Volunteer Remotely",
    content: "Contribute from anywhere in the world",
    to: "#",
    
    IconBgColor: "var(--secondary-color)",
    bg:"var( --black-to-white)"
  },
  {
    logo: <Flag color="white" size={32} />,
    title: "Volunteer in Your Own City",
    content: "Make an impact in your local community",
    to: "#",
    IconBgColor: "var(--blue-color)",
    bg:"var( --black-to-white)"
  },
  {
    logo: <Monitor color="white" size={32} />,
    title: "Volunteer Online",
    content: "Use your digital skills to help",
    to: "#",
    IconBgColor: "var(--secondary-color)",
    bg:"var( --black-to-white)",
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
