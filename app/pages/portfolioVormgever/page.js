import React from "react";
import QuitButton from "@/app/components/QuitButton";
import { portfolioInfo } from "@/app/portfolioInfo";

const page = () => {
  const portfolioNumber = 0;

  return (
    <div className="bg-black absolute px-32 top-0 left-0 w-full h-full text-white">
      <div className="fixed top-4 left-4 flex gap-4">
        <QuitButton />
      </div>
      <div
        className="absolute -top-12 -right-12 h-[500px] w-[500px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${portfolioInfo[portfolioNumber].blob})`,
        }}
      ></div>
      <div className="mt-32">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">Jouw UX talent is</h3>
          <h1
            className="text-[5rem] font-bold"
            style={{ color: portfolioInfo[portfolioNumber].color }}
          >
            {portfolioInfo[portfolioNumber].title}
          </h1>
          <p className="max-w-[750px] mt-24 text-medium leading-relaxed">
            {portfolioInfo[portfolioNumber].description}
          </p>
        </div>
      </div>
      <div className="flex gap-12 justify-center items-center mt-[150px]">
        <p className="rotate-90">&rarr;</p>
        <h2>Vind hier front-end UX inspiratie voor je volgende project </h2>
        <p className="rotate-90">&rarr;</p>
      </div>
      <div className="grid grid-cols-2">
        {portfolioInfo[portfolioNumber].previewImages.map((item, index) => (
          <img
            key={index}
            src={portfolioInfo[portfolioNumber].previewImages}
            alt="images"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
