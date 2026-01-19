import React from "react";
import VolunteerHero from "./VolunteerIntro/VolunteerIntro";
import VolunteerOptions from "./VolunteerOptions/VolunteerOptions";
import education from "../../Assets/education.webp";
import VolunteerForm from "./VolunteerForm/VolunteerForm";
import { volunteerPageHelmet } from "../../helmet";
const Volunteer = () => {
  const volunterHeroDetails = {
    title: "BECOME A VOLUNTEER",
    description:
      "Are you passionate about making a difference? Join our team of dedicated volunteers and help us change lives across Africa.",
    buttonText: "BECOME A VOLUNTEER",
    bg: education,
  };

  return (
    <div>
      {volunteerPageHelmet()}
      <VolunteerHero
        bg={volunterHeroDetails.bg}
        title={volunterHeroDetails.title}
        description={volunterHeroDetails.description}
        buttonText={volunterHeroDetails.buttonText}
      />
      <VolunteerOptions />
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;
