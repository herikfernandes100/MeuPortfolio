import React from "react";
import { portfolio } from "../config/portfolio";

function Footer() {
  return (
    <div className="w-full py-12 text-gray-600 flex justify-center items-center border-t border-white/[0.05]">
      <p className="text-sm tracking-wide">
        {portfolio.footer.text}
        <span className="text-orange-500 hover:text-orange-400 transition-colors duration-200 cursor-default font-medium">
          {portfolio.footer.developerName}
        </span>
      </p>
    </div>
  );
}

export default Footer;
