import React from "react";
import QuitButton from "@/app/components/QuitButton";
import { portfolioInfo } from "@/app/portfolioInfo";
import PortfolioButtons from "@/app/components/PortfolioButtons";
import NavBar from "@/app/components/NavBar";

const page = () => {
  const portfolioNumber = 2;

  return (
    <div className="bg-black absolute px-4 lg:px-32 top-0 left-0 w-full h-full text-white">
      <NavBar />
      <div className="absolute right-2 top-[100px] bg-no-repeat bg-cover">
        <img
          src="/images/animatiePortfolio.png"
          className="w-32 lg:w-[600px]"
          alt="animator icon"
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
      <div className="grid grid-cols-2 mt-[4rem] lg:mt-24">
        <div className="flex flex-col lg:grid grid-cols-2 gap-2">
          <video width="400" height="700" controls>
            <source src="/videos/animatieKevinVid2.mp4" type="video/mp4" />
          </video>
          <video width="400" height="700" controls>
            <source src="/videos/animatieKevinVid1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pl-4 lg:pl-12 flex flex-col gap-6">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Kevin
          </h2>
          <p className="lg:text-xl text-md">
            XR is een actiegroep die zich inzet voor het klimaat. Ze staan
            bekend voor hun protest acties waarbij ze o.a. de A12 snelweg
            blokkeren. Voor mijn 1e sprint van de minor heb ik
            campagnevideo&apos;s gemaakt. Door middel van storytelling en
            animatie heb ik deze campagne vormgeven.
          </p>
          <p className="lg:text-md text-sm">
            Het idee is om dezelfde scripts op twee verschillende wijzen in
            video te visualiseren. Zo heb ik een script geschreven over het de
            verslechtering van deluchtkwaliteit. Om deze boodschap begrijpbaar
            te maken vertel ik in het script over een vergelijking met een pakje
            sigaretten. Dit script heb ik in een grafisch manier geanimeerd, en
            ook een video gemaakt bestaande uit beelden. Het doel van deze
            video&apos;s is de boodschap van XR verspreiden. Ik vond het
            ontzettend leuk verschillende beeld vormen te vinden voor deze
            video&apos;s.
          </p>
        </div>
      </div>
      <div className="mt-12 lg:h-full w-full">
        <video width="full" height="700" controls>
          <source src="/videos/animatieKevinVid3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lg:hidden w-full h-[2px] bg-slate-500 my-12"></div>
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="flex flex-col gap-6 pr-12">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Damian
          </h2>
          <p className="lg:text-xl text-md">
            Voor dit project ben ik bezig geweest in After Effects om te
            animeren. Ik had hiervoor nog bijna niks met animeren gedaan, het
            leek me daarom leuk om hier wat mee te doen. Om het voor mezelf
            interessant te maken heb ik ervoor gekozen om een korte advertentie
            te maken waarin ik de functies van mijn synthesizer (Arturia
            Microfreak) uitlicht. Zo heb ik drie functies om het geluid te
            vervormen uitgekozen en deze doormiddel van een in- en uitzoom
            getoond. Om het in een vast thema te houden heb ik de kleuren van de
            synthesizer laten terugkomen in de achtergrond en heb ik ook
            dezelfde tekst gebruikt als die op de website van het product.
          </p>
          <p className="lg:text-md text-sm">
            Om de video wat meer diepgang te geven ben ik met audio aan de gang
            gegaan, deze geluiden heb ik gemaakt op de synthesizer om zo de
            video te ondersteunen. Wat er op het beeld gebeurt hoor je ook in de
            audio, zodat je zonder veel tekstuele ondersteuning snapt wat er
            gebeurt.
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex flex-col gap-4">
          <img src="/images/animatieDamian1.png" alt="image Damian" />
          <video width="full" height="700" controls>
            <source src="/videos/animatieDamianVid1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default page;
