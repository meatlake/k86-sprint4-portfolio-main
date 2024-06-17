"use client";
import Link from "next/link";
import BeginButton from "./components/BeginButton";
import Image from "next/image";
import { categories } from "./categories";
import { portfolioInfo } from "./portfolioInfo";

export default function Home() {
  return (
    <div className="fixed top-0 left-0 flex flex-col justify-center px-5 items-center w-screen h-screen bg-bg-image bg-cover bg-no-repeat">
      {/* <div className="p-12 backdrop-blur-xl rounded-xl border border-2">
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
      </div> */}
      <div className="fixed h-screen w-screen px-6 flex gap-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/blobs/blobBlue.png"
            width="120"
            height="120"
            className="w-[80px] lg:w-full"
            alt="blob"
          />
          <button className="lg:px-4 lg:py-2 px-2 py-1 text-[0.75rem] bg-white border-2 border-black rounded-full -mt-4 font-bold">
            <Link className="text-[0.75rem]" href="/pages/portfolioCoder">
              {categories[1].category}
            </Link>
          </button>
        </div>
        <div className="flex flex-col  items-center">
          <Image
            src="/blobs/blobGreen.png"
            width="120"
            height="120"
            className="w-[78px] lg:w-full"
            alt="blob"
          />
          <button className="lg:px-4 lg:py-2 px-2 py-1 text-[0.75rem] bg-white border-2 border-black rounded-full -mt-4 font-bold">
            <Link className="text-[0.75rem]" href="/pages/portfolioVormgever">
              {categories[0].category}
            </Link>
          </button>
        </div>
        <div className="flex flex-col  items-center">
          <Image
            src="/blobs/blobOrange.png"
            width="120"
            height="120"
            className="w-[80px] lg:w-full"
            alt="blob"
          />
          <button className="lg:px-4 lg:py-2 px-2 py-1 text-[0.75rem] bg-white border-2 border-black rounded-full -mt-4 font-bold">
            <Link className="text-[0.75rem]" href="/pages/portfolio3Dartist">
              {categories[2].category}
            </Link>
          </button>
        </div>
        <div className="flex flex-col  items-center">
          <Image
            src="/blobs/blobPink.png"
            width="120"
            height="120"
            className="w-[80px] lg:w-full"
            alt="blob"
          />
          <button className="lg:px-4 lg:py-2 px-2 py-1 text-[0.75rem] bg-white border-2 border-black rounded-full -mt-4 font-bold">
            <Link className="text-[0.75rem]" href="/pages/portfolioAnimator">
              {categories[3].category}
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-[300px] flex flex-col z-50">
        <BeginButton />
        <Link
          href="/slider"
          className="mt-4 text-2xl min-w-[250px] text-center text-black bg-white font-semibold rounded-lg lg:px-4 lg:py-2 px-2 py-1 text-sm hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
        >
          Slider
        </Link>
      </div>
    </div>
  );
}
