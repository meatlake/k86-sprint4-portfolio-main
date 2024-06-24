import React from "react";
import QuitButton from "@/app/components/QuitButton";
import { portfolioInfo } from "@/app/portfolioInfo";
import PortfolioButtons from "@/app/components/PortfolioButtons";
import NavBar from "@/app/components/NavBar";

const page = () => {
  const portfolioNumber = 0;

  return (
    <div className="bg-black absolute px-4 lg:px-32 top-0 left-0 w-full h-full text-white">
      <NavBar />
      <div className="absolute right-2 top-[100px]  bg-no-repeat bg-cover">
        <img
          src="/images/vormgevingPortfolio.png"
          className="w-32 lg:w-[600px]"
          alt="vormgeving icon"
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
        <div className="flex flex-col lg:grid grid-cols-2 gap-2">
          <div className="bg-vormgevingFemke1 bg-cover w-full h-[300px] bg-no-repeat"></div>
          <div className="bg-vormgevingFemke2 bg-cover w-full h-[300px] bg-no-repeat"></div>
          <div className="bg-vormgevingFemke3 bg-cover w-full h-[300px] bg-no-repeat"></div>
          <div className="bg-vormgevingFemke4 bg-cover w-full h-[300px] bg-no-repeat"></div>
        </div>
        <div className="pl-4 lg:pl-12 flex flex-col gap-6">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Femke
          </h2>
          <p className="lg:text-xl text-md">
            Als digital designer zit ik dagelijks het grootste gedeelte van mijn
            tijd achter mijn beeldscherm, wat er soms voor zorgt dat ik snak
            naar even lekker met mijn handen werken. Om die reden koos ik er
            voor om in mijn derde blok te gaan schilderen. Ik wilde opzoek gaan
            of ik ook handmatig mijn skills als designer kon verbeteren door
            mijn creativiteit op een andere manier op te wekken.
          </p>
          <p className="lg:text-md text-sm">
            Zo koos ik ervoor om te acryl verven, ik teken in mijn vrije tijd al
            erg veel waardoor ik best al wel wat kennis heb. Schilderen was nog
            redelijk nieuw voor mij, zo heb ik een cursus gevolgd over acryl
            verven en heb ik onwijs veel geëxperimenteerd tijdens dit proces.
            Ook bewerkte en paste ik mijn schilderijen digitaal toe elke week.
            Van dit proces heb ik onwijs veel geleerd, ik heb nieuwe
            schildertechnieken geleerd, ik heb geleerd over kleurgebruik, ik heb
            nieuwe stijlen ontdekt en ik heb geleerd hoe ik dit digitaal als
            designer kan gebruiken. Er zijn vooral veel patronen, achtergronden
            en collages uitgekomen die ik als digital designer kan gebruiken.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <img src="/images/paintingDamian.jpg" alt="painting image" />
      </div>
      <div className="lg:hidden w-full h-[2px] bg-slate-500 my-12"></div>
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="flex flex-col gap-6 pr-12">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Kevin
          </h2>
          <p className="lg:text-xl text-md">
            HINT is een innovatie beweging binnen de Haagse Hogeschool. Ik heb
            mee mogen doen met een Hackaton afgelopen lente. Tijdens deze dagen
            heb ik samen met medewerkers van de Haagse hogeschool een
            campagneconcept bedacht. Doel van de campagne: merkbekendheid
            vergroten. Voor mijn 3e sprint van mijn minor visual design en
            front-end development ben ik verder gegaan met dit conceptvoorstel.
            Ik heb een nieuwe draai aan de vormgeving gegeven, een offerte
            opgezet en onderzoek gedaan naar de printkosten.
          </p>
          <p className="lg:text-xl text-sm">
            Het idee is een guerilla campagne. Levensgrote kaarten met daarop
            een inspirerende vraag worden verspreid door klaslokalen over
            diverse Hogeschool panden. Met als doel de docent in gesprek te
            krijgen over onderwijsinnovatie. Voordat je een merk echt bekend kan
            maken moet je de doelgroep affiniteit laten voelen met het
            onderwerp. In dit geval onderwijs innovatie. Deze innovatie is
            bedoeld voor de (toekomstige) studenten. Maar moet juist vaak
            gerealiseerd worden door docenten en medewerkers van de Haagse
            Hogeschool. Daarom is dit gesprek zo belangrijk. Het laat het
            onderwerp leven, innitieert gezonde discussie en vergroot daarmee de
            bekendheid van HINT.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0">
          <img src="/images/kevinVorm1.png" alt="keving image" />
          <img src="/images/kevinVorm2.png" alt="kevin image" />
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default page;
