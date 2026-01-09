
import Wrapper from '../../../Assets/utils/Wrapper';
import { DonationCards } from '../../HomePage/Donation/Donation';
import { Locate, Mail, PhoneCall } from 'lucide-react';



const contactOptions = [
  {
    logo: <Locate color="var(--primary-color)" size={32} />,
    title: "Visit Us",
    content: "123 Hope Street, Nairobi, Kenya",
    to: "#",
    link: "Get Directions",
    
    IconBgColor: "var(--secondary-color)",
    bg:"var(--dark-blue)"
  },
  {
    logo: <PhoneCall color="var(--primary-color)" size={32} />,
    title: "Call Us",
    content: "+254 700 123 456",
    to: "#",
    link: "Call Now",
    IconBgColor: "var(--blue-color)",
    bg:"var(--darker-gray)"
  },
  {
    logo: <Mail color="var(--primary-color)" size={32} />,
    title: "Email Us",
    content: "info@urbantrickles.org",
    to: "#",
    link: "Send an Email",
    IconBgColor: "var(--secondary-color)",
    bg:"var(--dark-blue)",
  },
];



const ContactOptionsComponent = () => {
  return (
    <div>
      {DonationCards(contactOptions)}
    </div>
  )
}


const ContactOptions = () => {
    return <Wrapper component={<ContactOptionsComponent />}  bg="var(--dark-text)"/>
}

export default ContactOptions