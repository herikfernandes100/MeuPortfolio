import React from "react";

function Heading({ FWord, LWord }) {
  return (
    <h1 className="text-white text-center lg:text-left font-extrabold text-[clamp(2.25rem,12vw,5.875rem)] font-inter leading-[1.05] break-words m-0 p-0">
      {FWord} <span style={{ color: "#2b2927" }}>{LWord}</span>
    </h1>
  );
}

export default Heading;
