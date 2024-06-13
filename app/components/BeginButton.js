"use client";
import React from "react";
import Link from "next/link";

const BeginButton = () => {
  return (
    <Link
      className="mt-8 px-20 py-3 bg-white rounded-lg text-2xl text-blue-500 font-semibold hover:text-white hover:bg-blue-500 transition-colors duration-200 ease-in-out"
      href="/quiz"
    >
      Begin
    </Link>
  );
};

export default BeginButton;
