"use client";
import Link from "next/link";
import BeginButton from "./components/BeginButton";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center px-5 items-center w-screen h-screen bg-bg-image bg-cover bg-no-repeat">
      <div className="p-12 backdrop-blur-xl rounded-xl border border-2">
        <h1 className="lg:text-5xl text-3xl font-display text-white font-semibold">
          Welkom bij onze quiz
        </h1>
        <p className="text-white text-lg mt-8 italic">Gemaakt door:</p>
        <ul className="mt-2 grid grid-cols-2 gap-2">
          <li className="text-white py-2 text-xl lg:text-2xl font-semibold">
            Kevin
          </li>
          <li className="text-white py-2 text-xl lg:text-2xl font-semibold">
            Femke
          </li>
          <li className="text-white py-2 text-xl lg:text-2xl font-semibold">
            Damian
          </li>
          <li className="text-white py-2 text-xl lg:text-2xl font-semibold">
            Julian
          </li>
        </ul>
      </div>
      <BeginButton />
      <Link
        href="/slider"
        className="mt-4 text-2xl min-w-[250px] text-center text-white font-semibold border-2 rounded-lg px-4 py-2 hover:bg-white hover:text-blue-600 hover:border-white transition-all duration-200 ease-in-out"
      >
        Slider
      </Link>
    </div>
  );
}
