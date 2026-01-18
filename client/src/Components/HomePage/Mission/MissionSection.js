import React, { useState } from "react";
import { Utensils, Users } from "lucide-react";
import "./MissionSection.scss";
import Wrapper from "../../../Assets/utils/Wrapper";
import africaThumbnail from  "../../../Assets/thumbs/africa-thumbnail.webp"
import { smallHeader } from "../../../Assets/utils/utils";

const africaImageLink= "https://ik.imagekit.io/nal7vhb1y/NGO/africa.png"




const Mission = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="mission">
      <div className="mission__container">
        {/* left side*/}
        <div className="mission__content">
          <span className="mission__tag">OUR MISSION</span>

          <h2 className="mission__title">What We Do</h2>

          <p className="mission__subtitle">
            Uncle Tusitime Dream Destiny Helpers Foundation Expands Community
            Empowerment Efforts
          </p>

          <p>
            The <strong>Affordable Meals for Urban Hustlers</strong> program is
            our flagship initiative designed to tackle food insecurity among
            low-income workers burdened by high living costs.
          </p>

          <p>
            Operating across Eastern Africa, with its headquarters in Kenya, the
            Foundation is committed to improving lives through essential
            services.
          </p>

          <div className="mission__stats">
            

            <div className="stat">
              <Users size={28} />
              <div>
                <h4>20+</h4>
                <span>Communities</span>
              </div>
            </div>
          </div>
        </div>

        {/*right side */}
        <div className="mission__image">
          {/* Thumbnail*/}
          <img
            src={africaThumbnail}
            alt=""
            className={`thumb ${loaded ? "hidden" : ""}`}
            aria-hidden
          />

          {/* image(lazy loaded) */}
          <img
            src={africaImageLink}
            alt="Africa mission map"
            loading="lazy"
            className={`full ${loaded ? "visible" : ""}`}
            onLoad={() => setLoaded(true)}
          />

          <div className="stat">
              <Utensils size={28} />
              <div>
                <h4>15K+</h4>
                <span>Meals Served</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  return <Wrapper component={<Mission />} bg="var(--gray-bg)" />;
};

export default MissionSection;
