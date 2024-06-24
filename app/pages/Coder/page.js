import React from "react";
import { portfolioInfo } from "@/app/portfolioInfo";
import PortfolioButtons from "@/app/components/PortfolioButtons";
import NavBar from "@/app/components/NavBar";

const page = () => {
  const portfolioNumber = 3;

  return (
    <div className="bg-black absolute px-4 lg:px-32 top-0 left-0 w-full h-full text-white">
      <NavBar />
      <div className="absolute right-2 top-[100px] bg-no-repeat bg-cover">
        <img
          src="/images/developerPortfolio.png"
          className="w-32 lg:w-[600px]"
          alt="developer icon"
        />
      </div>
      <div className="mt-32">
        <div className="flex flex-col gap-1 lg:gap-4">
          <h3 className="text-2xl">Jouw UX talent is</h3>
          <h1
            className="text-6xl lg:text-[5rem] font-bold"
            style={{ color: portfolioInfo[portfolioNumber].color }}
          >
            {portfolioInfo[portfolioNumber].title}
          </h1>
          <p className="max-w-[750px] mt-12 lg:mt-24 text-medium leading-relaxed">
            {portfolioInfo[portfolioNumber].description}
          </p>
        </div>
      </div>
      <div className="flex text-center lg:gap-12 justify-center items-center mt-[4rem] lg:mt-[150px]">
        <p className="rotate-90 lg:text-2xl">&rarr;</p>
        <h2 className="text-md px-12 lg:text-2xl">
          Vind hier {portfolioInfo[portfolioNumber].title} UX inspiratie voor je
          volgende project{" "}
        </h2>
        <p className="rotate-90 lg:text-2xl">&rarr;</p>
      </div>
      <div className="lg:grid grid-cols-2 flex flex-col gap-6 mt-[4rem] lg:mt-24">
        <div className="flex flex-col lg:grid grid-cols-1 gap-2">
          <div className="bg-coderJulian1 bg-contain w-screen h-screen lg:w-[450px] lg:h-[800px] bg-no-repeat"></div>
        </div>
        <div className="pl-4 lg:pl-12 flex flex-col gap-6">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Julian
          </h2>
          <p className="lg:text-xl text-md">
            SwiftUI is het framework om apps te bouwen van Apple. Deze taal
            wordt steeds vaker gebruikt in het bouwen van applicaties voor
            verschillende apparaten zoals de iPhone, iPad en zelfs de nieuwe
            Vision Pro, met VisionOS. De mogelijkheden zijn al ontzettend groot
            door de makkelijk inzetbare componenten zoals kaarten en
            betalingsmogelijkheden. Ik heb de fundamentals van SwiftUI kunnen
            leren en hiermee een aantal apps kunnen maken die gebruikt kunnen
            worden op een iPhone.
          </p>
          <p className="lg:text-md text-sm">
            SwiftUI werkt doormiddel van Views, een View kan meerdere dingen
            zijn, maar is eigenlijk een onderdeel van wat je ziet op je
            telefoon, ipad of laptop. Je moet het zo zien: Een View kan
            bijvoorbeeld 1 rij met informatie zijn, zoals een tekst met een
            plaatje. Deze rij (View) kun je dan in een ander bestand weer
            importeren en in een andere View plaatsen die meerdere Views in
            bijvoorbeeld een lijst zet. Deze View met een lijst kun je dan weer
            op bijvoorbeeld je hoofd View zetten wat je homescreen voor moet
            stellen. Zo combineer je dus verschillende views en deze maak je ook
            op aparte plekken, waardoor het ook meteen een redelijk
            overzichtelijke taal is. Je kunt er ook voor kiezen om alle views of
            onderdelen in 1 bestand te schrijven, maar daar wordt de code
            onoverzichtelijk van en het is ook niet de best practice.
          </p>
          <p className="lg:text-md text-sm">
            Het is dus verstandiger om verschillende mappen met Views en
            modellen te maken om zo andere programmeurs die eventueel met jouw
            code aan de slag gaan, een overzichtelijk beeld te geven van je
            applicatie.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <img src="/images/coderJulian2.png" alt="code screenshot" />
      </div>
      <div className="lg:hidden w-full h-[2px] bg-slate-500 my-12"></div>
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4"></div>
      <div className="h-32"></div>
    </div>
  );
};

export default page;
