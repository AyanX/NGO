import React, { Suspense, useState } from "react";
import Hero from "./Hero/Hero";
import water from "../../Assets/water.webp";
import food from "../../Assets/food.webp";
import affordable from "../../Assets/affordable.webp";
import education from "../../Assets/education.webp";
import Involve from "./Involve/Involve";
import MissionSection from "./Mission/MissionSection";
import Vision from "./Vision/Vision";

import { useInView } from "react-intersection-observer";
import Donation from "./Donation/Donation";
import Causes from "./Causes/Causes";

const Programs = React.lazy(() => import("./Programs/Programs"));

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
  const [hasReachedMission, setHasReachedMission] = useState(false);

  // 2. Setup the observer
  const { ref } = useInView({
    triggerOnce: true, // Only trigger the load once
    rootMargin: "200px 0px", // Start loading 200px before the user reaches the section
    onChange: (inView) => {
      if (inView) setHasReachedMission(true);
    },
  });

  return (
    <div>
      <Hero heroData={heroData} />
      <Involve />

      {/* 3. Attach the ref to the trigger section */}
      <div ref={ref}>
        <MissionSection />
      </div>

      <Vision />

      {/* 4. Conditionally render with Suspense */}
      {hasReachedMission && (
        <Suspense fallback={<div className="loader">Loading Programs...</div>}>
          <Programs />
        </Suspense>
      )}
      <Donation/>
      <Causes/>
    </div>
  );
};

export default Homepage;
