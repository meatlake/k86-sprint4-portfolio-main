import React from "react";
import QuitButton from "@/app/components/QuitButton";
import { portfolioInfo } from "@/app/portfolioInfo";
import PortfolioButtons from "@/app/components/PortfolioButtons";
import NavBar from "@/app/components/NavBar";

const page = () => {
  const portfolioNumber = 1;

  return (
    <div className="bg-black absolute px-4 lg:px-32 top-0 left-0 w-full h-full text-white">
      <NavBar />
      <div className="absolute right-2 top-[100px] bg-no-repeat bg-cover">
        <img
          src="/images/3dartistPortfolio.png"
          className="w-32 lg:w-[600px]"
          alt="3d artist icon"
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
        <div className="flex">
          <img
            src="/images/julian3D1.svg"
            alt="3d julian"
            className="max-h-[600px]"
          />
        </div>
        <div className="pl-4 lg:pl-12 flex flex-col gap-6">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Julian
          </h2>
          <p className="lg:text-xl text-md">
            In Sprint 1 ben ik aan de slag gegaan met Spline, dit is een 3D
            modelleringstool die je makkelijk kunt integreren met verschillende
            websitebouwers. Deze modellen kun je gebruiken om de ervaring op je
            website te verbeteren en tekst te ondersteunen met visualiteit. Je
            kunt bijvoorbeeld een 3d ontwerp maken van het product dat je
            verkoopt en deze interactief maken. Zo kunnen gebruikers het object
            draaien en erop inzoomen om zo het product van dichtbij te kunnen
            zien.
          </p>
          <p className="lg:text-md text-sm">
            Ik heb geleerd hoe ik verschillende vormen kan maken, variabelen mee
            kan geven zodat de vormen dynamisch kunnen veranderen en hoe ik deze
            vormen kan laten bewegen. Door het gebruik van de tool Spline heb ik
            de basiskennis verkregen die nodig is om te kunnen 3d
            &apos;sculpten&apos; in andere programma&apos;s zoals Blender, die
            wat ingewikkelder en meer in your face is.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <img src="/images/julian3D2.png" alt="julian 3d 2" />
      </div>
      <div className="lg:hidden w-full h-[2px] bg-slate-500 my-12"></div>
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="flex flex-col gap-6 pr-12">
          <h2 className="lg:text-3xl text-xl font-semibold">
            Project van Kevin
          </h2>
          <p className="lg:text-xl text-md">
            In Sprint 1 ben ik aan de slag gegaan met Spline, dit is een 3D
            modelleringstool die je makkelijk kunt integreren met verschillende
            websitebouwers. Deze modellen kun je gebruiken om de ervaring op je
            website te verbeteren en tekst te ondersteunen met visualiteit. Je
            kunt bijvoorbeeld een 3d ontwerp maken van het product dat je
            verkoopt en deze interactief maken. Zo kunnen gebruikers het object
            draaien en erop inzoomen om zo het product van dichtbij te kunnen
            zien.
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
        <div className="mt-4 lg:mt-0">
          <img src="/images/kevinVorm1.png" alt="image Kevin" />
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default page;
