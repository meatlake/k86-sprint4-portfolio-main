import React from "react";
import Link from "next/link";

const QuitButton = () => {
  return (
    <Link
      className="bg-white flex justify-center items-center text-sm lg:text-xl px-2 py-1 lg:px-6 lg:py-2 text-center border-2 border-transparent text-black font-semibold hover:bg-black hover:text-white hover:border-2 hover:border-white transition-colors duration-200 ease-in-out"
      href="/"
    >
      Stoppen
    </Link>
  );
};

export default QuitButton;
