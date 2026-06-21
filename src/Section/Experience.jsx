import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";
import { portfolio } from "../config/portfolio";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
        {portfolio.experience.map((exp, i) => (
          <ExperienceCard
            key={i}
            heading={exp.heading}
            para={exp.para}
            date={exp.date}
            active={exp.active}
          />
        ))}
      </div>
    </section>
  );
});

export default Experience;
