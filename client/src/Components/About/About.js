import VolunteerHero from "../Volunteer/VolunteerIntro/VolunteerIntro";
import AboutIntro from "./AboutIntro/AboutIntro";
import CoreValues from "./CoreValues/CoreValues";
import Timeline from "./Timeline/Timeline";
import food from "../../Assets/food.webp";

const About = () => {
  const aboutHeroDetails = {
    title: "A VISION FOR CHANGE",
    description:"We believe in the power of people. Our mission is to bridge the gap between potential and opportunity through dedicated, local action across the continent.",
     buttonText: "WHO WE ARE",
     bg: food,
  };

  return (
    <div>
      <VolunteerHero bg={aboutHeroDetails.bg} title={aboutHeroDetails.title} description={aboutHeroDetails.description} buttonText={aboutHeroDetails.buttonText}/>
      <AboutIntro />
      <CoreValues />
      <Timeline />
    </div>
  );
};

export default About;
