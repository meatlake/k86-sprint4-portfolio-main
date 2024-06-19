import React from 'react'
import { useState } from 'react'
import { quizQuestions } from "../quizQuestions";
import Link from 'next/link';

const QuizButtons = () => {
    const [countCoder, setCountCoder] = useState(0);
  const [countAnimator, setCountAnimator] = useState(0);
  const [countArtist, setCountArtist] = useState(0);
  const [countVormgever, setCountVormgever] = useState(0);

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
    <div className="flex flex-col justify-center">
        <h3 className="text-white text-xl lg:text-2xl font-semibold self-center mt-10 md:mt-2 lg:mb-2">
            Vraag: {questionId + 1} van {quizQuestions.length}
        </h3>
        <div className="flex flex-col">
            <div className="lg:p-12 p-8 flex items-center justify-center">
            <h1 className="text-xl lg:text-5xl text-center text-white font-semibold">
                {quizQuestions[questionId].question}
            </h1>
            </div>
            <div className="mt-2 grid grid-cols-2 mx-1 lg:mx-10 gap-2">
            <button
                onClick={onClickCoder}
                className="p-5 lg:p-10 text-lg lg:text-2xl lg:min-w-64 lg:min-h-64 bg-black border-2 text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in-out font-medium"
            >
                {quizQuestions[questionId].answers[0].content}
            </button>
            <button
                onClick={onClickAnimator}
                className="p-5 lg:p-10 text-lg lg:text-2xl lg:min-w-64 lg:min-h-64 bg-black border-2 text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in-out font-medium"
            >
                {quizQuestions[questionId].answers[1].content}
            </button>
            <button
                onClick={onClickVormgever}
                className="p-5 lg:p-10 text-lg lg:text-2xl lg:min-w-64 lg:min-h-64 bg-black border-2 text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in-out font-medium"
            >
                {quizQuestions[questionId].answers[2].content}
            </button>
            <button
                onClick={onClickArtist}
                className="p-5 lg:p-10 text-lg lg:text-2xl lg:min-w-64 lg:min-h-64 bg-black border-2 text-white hover:bg-white hover:text-black transition-colors duration-200 ease-in-out font-medium"
            >
                {quizQuestions[questionId].answers[3].content}
            </button>
            </div>
            {isLastQuestion() && (
            <Link
                href="/pages/portfolioVormgever"
                className="text-black mt-4 bg-white self-center border-2 border-transparent px-4 py-2 hover:text-white hover:bg-black hover:border-white transition-all duration-200 ease-in-out"
            >
                Zie uitslag
            </Link>
            )}
        </div>
    </div>
  )
}

export default QuizButtons;