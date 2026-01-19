
import Hero from "./Hero/Hero";
import water from "../../Assets/water.webp";
import food from "../../Assets/food.webp";
import affordable from "../../Assets/affordable.webp";
import education from "../../Assets/education.webp";
import Involve from "./Involve/Involve";
import MissionSection from "./Mission/MissionSection";
import Vision from "./Vision/Vision";

import Donation from "./Donation/Donation";
import Causes from "./Causes/Causes";

import Programs from "./Programs/Programs";

const heroData = [
  {
    img: food,
    title: "RESTORING HUMAN DIGNITY",
    details: "Feeding Hope to Every Home",
    subtitle:
      "Through our daily relief programs, we ensure no family goes to bed hungry, providing immediate nutritional support to those in crisis.",
  },
  {
    img: water,
    title: "FOUNTAIN OF LIFE",
    details: "Life Begins With Clean Water",
    subtitle:
      "We are installing sustainable solar-powered wells to bring safe, potable water to remote villages, ending the walk for water forever.",
  },
  {
    img: education,
    title: "ARCHITECTS OF TOMORROW",
    details: "Building Dreams through Better Education",
    subtitle:
      "Every child has a spark of genius. We provide the tools, books, and environments needed to turn that potential into a professional future.",
  },
  {
    img: affordable,
    title: "EMPOWERING COMMUNITIES",
    details: "Healthy Food, More Affordable Prices",
    subtitle:
      "Join us in our mission to provide nutritious food and sustainable opportunities to hardworking urban residents facing food insecurity.",
  },
];

const Homepage = () => {
  

  return (
    <div>
      <Hero heroData={heroData} />
      <Involve />

        <MissionSection />
  

      <Vision />

          <Programs />
      <Donation/>
      <Causes/>
    </div>
  );
};

export default Homepage;
