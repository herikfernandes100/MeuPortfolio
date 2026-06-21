import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { CiLocationArrow1 } from "react-icons/ci";
import { portfolio } from "../config/portfolio";

const Hstyle = "text-white font-bold text-3xl lg:text-5xl";

const Intro = React.forwardRef(function Intro(props, ref) {
  const { headline, heroDescription, stats, stackCards } = portfolio;

  return (
    <section
      ref={ref}
      data-name="Intro"
      className="scroll-mt-28 flex flex-col w-full gap-8 md:gap-10 items-center md:items-start pt-16 md:pt-0"
    >
      <div>
        <Heading FWord={headline.fWord} LWord={headline.lWord} />
      </div>

      <div className="md:pr-20 lg:pr-45 text-center md:text-left">
        <Paragraph para={heroDescription} />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center md:justify-start w-full gap-8 md:gap-20">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start group">
            <h1 className={`${Hstyle} group-hover:text-orange-500 transition-colors duration-300`}>
              {stat.count}
            </h1>
            <div className="max-w-[100px] md:max-w-none">
              <Paragraph para={stat.label} />
            </div>
          </div>
        ))}
      </div>

      {/* Skill cards */}
      {/* Stack Cards */}
      <div className="flex gap-6 flex-col md:flex-row w-full stagger-reveal">
        {stackCards.map((card, i) => {
          const {
            title,
            subtitle,
            Icon,
            widthClass,
            cardHoverClass,
            glowClass,
            iconClass,
            btnClass,
          } = card;
          return (
            <div
              key={i}
              className={`group relative overflow-hidden h-72 w-full ${widthClass} bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-10 flex flex-col justify-between transition-all duration-500 ${cardHoverClass}`}
            >
              <div className={`absolute -right-8 -top-8 w-40 h-40 rounded-full blur-[60px] transition-all duration-700 ${glowClass}`}></div>

              <div className={`p-4 rounded-2xl w-fit border transition-all duration-500 ${iconClass}`}>
                <Icon size={32} />
              </div>

              <div className="relative z-10">
                <h3 className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-2">{title}</h3>
                <h1 className="text-white font-bold text-2xl leading-tight">
                  {subtitle}
                </h1>
              </div>

              <div className="flex justify-end relative z-10">
                <button className={`h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg group-hover:scale-110 ${btnClass}`}>
                  <CiLocationArrow1 size={24} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Intro;
