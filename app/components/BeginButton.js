"use client";
import React from "react";
import Link from "next/link";

const BeginButton = () => {
  return (
    <Link
      className="mt-8 px-20 py-3 min-w-[250px] text-center bg-black rounded-lg text-2xl text-white font-semibold hover:text-black hover:bg-white transition-colors duration-200 ease-in-out"
      href="/question"
    >
      Doe de quiz
    </Link>
  );
};

export default BeginButton;
