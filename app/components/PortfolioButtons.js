import React from "react";
import Link from "next/link";

const PortfolioButtons = () => {
  return (
    <div className="flex gap-2">
      <Link
        className="bg-black px-2 py-1 text-sm flex justify-center items-center lg:px-6 lg:py-2 text-center border-2 border-white text-white font-semibold lg:text-xl hover:bg-white hover:text-black hover:border-2 hover:border-white transition-colors duration-200 ease-in-out"
        href="/pages/portfolioVormgever"
      >
        Vormgeving
      </Link>
      <Link
        className="bg-black px-2 py-1 text-sm flex justify-center items-center lg:px-6 lg:py-2 text-center border-2 border-white text-white font-semibold lg:text-xl hover:bg-white hover:text-black hover:border-2 hover:border-white transition-colors duration-200 ease-in-out"
        href="/pages/portfolioCoder"
      >
        Coder
      </Link>
      <Link
        className="bg-black px-2 py-1 text-sm flex justify-center items-center lg:px-6 lg:py-2 text-center border-2 border-white text-white font-semibold lg:text-xl hover:bg-white hover:text-black hover:border-2 hover:border-white transition-colors duration-200 ease-in-out"
        href="/pages/portfolio3Dartist"
      >
        3D artist
      </Link>
      <Link
        className="bg-black px-2 py-1 text-sm flex justify-center items-center lg:px-6 lg:py-2 text-center border-2 border-white text-white font-semibold lg:text-xl hover:bg-white hover:text-black hover:border-2 hover:border-white transition-colors duration-200 ease-in-out"
        href="/pages/portfolioAnimator"
      >
        Animator
      </Link>
    </div>
  );
};

export default PortfolioButtons;
