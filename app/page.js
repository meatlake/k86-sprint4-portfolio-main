"use client";
import Link from "next/link";
import BeginButton from "./components/BeginButton";
import Image from "next/image";
import { categories } from "./categories";
import { portfolioInfo } from "./portfolioInfo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative top-0 left-0 flex flex-col justify-end px-5 items-center w-full h-screen bg-bg-image bg-cover bg-bottom bg-no-repeat">
        <div className="absolute top-24 lg:top-0 h-screen w-screen px-6 flex gap-2 justify-center items-center">
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
        <div className="mt-[300px] flex flex-col gap-6 lg:gap-0 z-50">
          <BeginButton />
          {/* <Link
          href="/slider"
          className="mt-4 text-2xl min-w-[250px] text-center text-black bg-white font-semibold rounded-lg lg:px-4 lg:py-2 px-2 py-1 text-sm hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
        >
          Slider
        </Link> */}
          <div className="flex flex-col items-center lg:mt-32 lg:mb-20">
            <button
              onClick={() =>
                document
                  .getElementById("about-us")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <h2 className="font-bold text-2xl">Over dit project</h2>
              <p className="rotate-90 text-2xl">&rarr;</p>
            </button>
          </div>
        </div>
      </div>
      <div id="about-us" className="bg-[#E1D500] py-32">
        <div className="lg:grid lg:grid-cols-3 flex flex-col lg:pl-24">
          <div className="flex flex-col col-span-1 gap-6 px-6 lg:px-0">
            <p className="text-2xl font-semibold">
              In de minor K86 Visual Design end Front-end development staat
              centraal dat jij ontdekt waar jou talenten en interesses liggen
              binnen het gebied van UX design.
            </p>
            <p className="text-xl">
              Onze projectgroep bestaande uit; Femke, Julian, Kevin en Damian
              hebben allemaal verschillende nieuwe skills ontwikkeld zoals;
              animeren, 3D modellen maken, programmeren en vormgeven. In dit
              multidisciplinair portfolio vind je uit of een van deze skills óók
              bij jou past.
            </p>
          </div>
          <div className="flex w-full h-full col-span-2 justify-end">
            <Image
              src="/images/about-us-bg.svg"
              alt="about us blobjes"
              width="100"
              height="100"
              className="w-[600px] h-full pl-6 lg:pl-0 lg:mt-0 mt-12"
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 flex flex-col gap-24 px-6 lg:px-24 lg:mt-0 mt-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">De droomboom</h2>
            <p className="text-xl">
              Ons concept is “de Droomboom” gaan heten. In een creatieve sessie
              ontstond de metafoor van de boom omdat we één product (de stam)
              moesten maken voor sprint 4 maar wij als groep zo veel
              verschillende soorten projecten en leerproces (de takken) hebben
              doorlopen. En ons werk samen is te vergelijken met een visuele
              psychedelische trip. Dus met felle kleuren, gradients, patronen en
              vooral veel creativiteit is dit portfolio ontstaan.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold">De quiz</h2>
            <p className="text-xl">
              Door middel van 4 stellingen en 4 vragen brengen we je bij het UX
              thema wat jou het meest interesseert. Hier laten we onze projecten
              zien waaraan we hebben gewerkt gedurende deze minor. De vragen
              zijn gebaseerd op onze projecten uit deze minor en gecategoriseerd
              in 4 UX thema&apos;s: vormgeven, animeren, 3D modelleren en
              programmeren.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-bg-sterren w-full h-screen bg-no-repeat bg-cover bg-center mt-32">
          <Image
            src="/images/blobRozeAbout.svg"
            alt="blob roze"
            width={300}
            height={300}
            className="w-[200px] lg:w-[300px]"
          />
          <Image
            src="/images/blobGroenAbout.svg"
            alt="blob groen"
            width={300}
            height={300}
            className="w-[200px] lg:w-[300px] self-end"
          />
        </div>
        <div className="px-12 flex flex-col gap-12 lg:px-[350px]">
          <p className="text-center text-xl lg:text-xl font-medium">
            Deze minor heeft ons geïnspireerd om nieuwe dingen te leren binnen
            het vak van UX design. En we hopen jou ook met deze quiz en onze
            projecten verder te kunnen inspireren.
          </p>
          <p className="text-center text-xl lg:text-xl font-medium">
            Wil je onze projecten zien zonder de quiz te doorlopen? Klik dan op
            een van de karakters in de droomboom om naar de project
            pagina&apos;s te navigeren.
          </p>
        </div>
      </div>
    </div>
  );
}
