"use client";
import React, { useState } from "react";
import QuitButton from "@/app/components/QuitButton";
import { sliderQuestions } from "@/app/sliderQuestions";
import { categories } from "@/app/categories";

const Page = () => {
  const [countCoder, setCountCoder] = useState(0);
  const [countAnimator, setCountAnimator] = useState(0);
  const [countArtist, setCountArtist] = useState(0);
  const [countVormgever, setCountVormgever] = useState(0);

  const [questionId, setQuestionId] = useState(1);

  function nextQuestion() {
    window.location.href = "/fifthQuestion";
  }

  const previousQuestion = () => {
    setQuestionId(questionId - 1);
  };

  const isLastQuestion = () => {
    if (questionId === quizQuestions.length - 1) {
      return true;
    }
  };

  const onClickValue = () => {
    if (document.getElementById("slider").value <= 25) {
      setCountVormgever(countVormgever + 1);
    } else if (
      document.getElementById("slider").value > 25 &&
      document.getElementById("slider").value <= 50
    ) {
      setCountCoder(countCoder + 1);
    } else if (
      document.getElementById("slider").value > 50 &&
      document.getElementById("slider").value <= 75
    ) {
      setCountArtist(countArtist + 1);
    } else if (document.getElementById("slider").value > 75) {
      setCountAnimator(countAnimator + 1);
    }
    nextQuestion();
  };

  function inputValue() {
    var x = document.getElementById("slider").value;
    document.getElementById("inputValueText").innerHTML = x;
  }
  return (
    <div className="bg-black text-white bg-bg-slider bg-no-repeat bg-cover p-24 flex flex-col h-screen gap-12 items-center justify-center">
      <div className="absolute top-4 left-4 flex gap-4">
        <QuitButton />
      </div>

      <div className="flex flex-col gap-6 items-center">
        {/* <div className="mt-14 lg:mt-0 mx-5">
          <ul className="flex gap-2 lg:gap-8 mb-22 text-white">
            <li className="flex flex-col items-center text-md lg:text-xl bg-[#8BBC3F] font-semibold border border-2 rounded-xl justify-center min-w-24 px-2 py-1 lg:p-4 lg:min-w-36">
              {categories[0].category}
              <span className="text-lg lg:text-3xl font-semibold">
                {countVormgever}
              </span>
            </li>
            <li className="flex flex-col items-center text-md lg:text-xl bg-[#DFA22B] font-semibold border border-2 rounded-xl justify-center min-w-24 px-2 py-1 lg:p-4 lg:min-w-36">
              {categories[3].category}
              <span className="text-lg lg:text-3xl font-medium">
                {countAnimator}
              </span>
            </li>
            <li className="flex flex-col items-center text-md lg:text-xl bg-[#70629C] font-semibold border border-2 rounded-xl justify-center min-w-24 px-2 py-1 lg:p-4 lg:min-w-36">
              {categories[2].category}
              <span className="text-lg lg:text-3xl font-medium">
                {countArtist}
              </span>
            </li>
            <li className="flex flex-col items-center text-md lg:text-xl bg-[#E4513B] font-semibold border border-2 rounded-xl justify-center min-w-24 px-2 py-1 lg:p-4 lg:min-w-36">
              {categories[1].category}
              <span className="text-lg lg:text-3xl font-medium">
                {countCoder}
              </span>
            </li>
          </ul>
        </div> */}

        <h3 className="text-white text-xl lg:text-2xl font-medium self-center mt-10 md:mt-2 lg:mb-2">
          Vraag: {questionId + 3} van 8
        </h3>

        <label for="slider">
          <h1 className="text-center font-semibold text-3xl">
            {sliderQuestions[questionId].question}
          </h1>
        </label>

        <div className="text-white lg:p-24 mt-24 flex flex-col gap-12 lg:gap-0">
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              list="tickmarks"
              className="appearance-none forced-colors:appearance-auto w-full lg:w-[1000px] h-1 rounded-full"
              id="slider"
            />
            <div className="absolute w-full flex justify-between pointer-events-none">
              <label className="text-left">Oneens</label>
              <label className="text-rigth">Eens</label>
            </div>
          </div>
          <div className="px-24 lg:mt-24 flex flex-col justify-center items-center">
            <button
              className="font-semibold text-xl border-2 rounded-full px-4 py-2 text-black hover:text-white bg-white hover:bg-black transition-all duration-200 ease-in-out"
              type="submit"
              value="Volgende"
              onClick={onClickValue}
            >
              Volgende
            </button>
          </div>
        </div>
      </div>
      {/* <input type="submit" value="Volgende" accessKey="enter"></input> */}
    </div>
  );
};

export default Page;
