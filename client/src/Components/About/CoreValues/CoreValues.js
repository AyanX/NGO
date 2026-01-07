import { Heart, ShieldCheck, Lightbulb, Users } from "lucide-react";
import {DonationCards} from '../../HomePage/Donation/Donation';
import Wrapper from "../../../Assets/utils/Wrapper";
import { smallHeader } from "../../../Assets/utils/utils";



export const coreValuesData = [
  {
    logo: <Heart color="#fff" size={32} />,
    title: "Compassion",
    content:
      "We lead with empathy and understanding, treating every person with dignity and respect.",
    IconBgColor: "var(--secondary-color)",
  },
  {
    logo: <ShieldCheck color="#fff" size={32} />,
    title: "Integrity",
    content:
      "We operate with transparency, accountability, and unwavering ethical standards in all we do.",
    IconBgColor: "var(--bright-blue)", 
  },
  {
    logo: <Lightbulb color="#fff" size={32} />,
    title: "Innovation",
    content:
      "We embrace creative solutions and sustainable approaches to address complex challenges.",
    IconBgColor: "var(--darker-gray)",
  },
  {
    logo: <Users color="#fff" size={32} />,
    title: "Collaboration",
    content:
      "We partner with communities, organizations, and stakeholders to maximize our collective impact.",
    IconBgColor: "var(--background-color)", 
  },
];



const CoreValuesSection = () => {
  return (
    <div>
      {smallHeader("Our Core Values","What Drives Us")}
      {DonationCards(coreValuesData)}
    </div>
  )
}

const CoreValues=()=>{
    return <Wrapper component={<CoreValuesSection/>} bg="var(--background-color)"/>
}

export default CoreValues
