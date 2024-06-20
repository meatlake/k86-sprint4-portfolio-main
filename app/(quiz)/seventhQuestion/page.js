"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { quizQuestions } from "@/app/quizQuestions";
import { categories } from "@/app/categories";
import QuitButton from "@/app/components/QuitButton";
import QuizButtons from "@/app/components/QuizButtons";

const Page = () => {
  const [countCoder, setCountCoder] = useState(0);
  const [countAnimator, setCountAnimator] = useState(0);
  const [countArtist, setCountArtist] = useState(0);
  const [countVormgever, setCountVormgever] = useState(0);

  const [questionId, setQuestionId] = useState(3);

  function nextQuestion() {
    window.location.href = "/eigthQuestion";
  }

  const previousQuestion = () => {
    setQuestionId(questionId - 1);
  };

  const isLastQuestion = () => {
    if (questionId === quizQuestions.length - 1) {
      return true;
    }
  };

  const onClickCoder = () => {
    setCountCoder(countCoder + 1);
    nextQuestion();
  };

  const onClickAnimator = () => {
    setCountAnimator(countAnimator + 1);
    nextQuestion();
  };

  const onClickArtist = () => {
    setCountArtist(countArtist + 1);
    nextQuestion();
  };

  const onClickVormgever = () => {
    setCountVormgever(countVormgever + 1);
    nextQuestion();
  };

  return (
    <div className="absolute top-0 left-0 flex bg-bg-quiz bg-no-repeat bg-cover flex-col justify-between py-12 px-4 items-center w-screen h-screen bg-black">
      <div className="absolute top-4 left-4 flex gap-4">
        <QuitButton />
        {/* {questionId > 0 && (
          <button
            onClick={previousQuestion}
            className="text-white border border-2 px-4 py-2"
          >
            Vorige vraag
          </button>
        )} */}
      </div>

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
      <div className="flex flex-col justify-center">
        <h3 className="text-white text-xl lg:text-2xl font-semibold self-center mt-10 md:mt-2 lg:mb-2">
          Vraag: {questionId + 4} van 8
        </h3>
        <div className="flex flex-col">
          <div className="lg:p-12 p-8 flex items-center justify-center">
            <h1 className="text-xl lg:text-5xl text-center text-white font-semibold">
              {quizQuestions[questionId].question}
            </h1>
          </div>
          <div className="mt-2 grid grid-cols-2 mx-1 lg:mx-10 gap-2">
            <img
              onClick={onClickCoder}
              src={quizQuestions[questionId].answers[0].content}
              className="lg:w-full h-[200px] w-full object-cover lg:h-[250px] cursor-pointer"
            ></img>
            <img
              onClick={onClickAnimator}
              src={quizQuestions[questionId].answers[1].content}
              className="lg:w-full h-[200px] w-full object-cover lg:h-[250px] cursor-pointer"
            ></img>
            <img
              onClick={onClickVormgever}
              src={quizQuestions[questionId].answers[2].content}
              className="lg:w-full h-[200px] w-full object-cover lg:h-[250px] cursor-pointer"
            ></img>
            <img
              onClick={onClickArtist}
              src={quizQuestions[questionId].answers[3].content}
              className="lg:w-full h-[200px] w-full object-cover lg:h-[250px] cursor-pointer"
            ></img>
          </div>
          {/* {isLastQuestion() && (
            <Link
              href="/pages/portfolioVormgever"
              className="text-black mt-4 bg-white self-center border-2 border-transparent px-4 py-2 hover:text-white hover:bg-black hover:border-white transition-all duration-200 ease-in-out"
            >
              Zie uitslag
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Page;
