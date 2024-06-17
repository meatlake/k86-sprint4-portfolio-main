import React from "react";
import Link from "next/link";

const QuitButton = () => {
  return (
    <Link
      className="bg-white flex justify-center items-center px-6 py-2 text-center border-2 border-transparent text-black font-semibold text-xl hover:bg-black hover:text-white hover:border-2 hover:border-white transition-colors duration-200 ease-in-out"
      href="/"
    >
      Quit
    </Link>
  );
};

export default QuitButton;
