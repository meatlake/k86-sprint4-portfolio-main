"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { quizQuestions } from "../quizQuestions";
import { categories } from "../categories";
import QuitButton from "../components/QuitButton";
import QuizButtons from "../components/QuizButtons";

const Page = () => {
  const [questionId, setQuestionId] = useState(0);
  function nextQuestion() {
    if (questionId < quizQuestions.length - 1) {
      setQuestionId(questionId + 1);
    }
  }

  const previousQuestion = () => {
    setQuestionId(questionId - 1);
  };

  const isLastQuestion = () => {
    if (questionId === quizQuestions.length - 1) {
      return true;
    }
  };
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-between py-12 px-4 items-center w-screen h-screen bg-black">
      <div className="absolute top-4 left-4 flex gap-4">
        <QuitButton />
        {questionId > 0 && (
          <button
            onClick={previousQuestion}
            className="text-white border border-2 px-4 py-2"
          >
            Vorige vraag
          </button>
        )}
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
      <QuizButtons />
    </div>
  );
};

export default Page;
