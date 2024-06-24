"use client";
import { useState } from "react";
import MultipleChoice from "./MultipleChoice";
import Slider from "./Slider";
import CategoryScores from "./CategoryScores";
import questions from "../data/questions";

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    Coder: 0,
    "3DArtiest": 0,
    Vormgever: 0,
    Animator: 0,
  });

  const handleAnswer = (answer) => {
    const question = questions[currentQuestion];
    const category = question.category;

    if (question.type === "multiple-choice") {
      const selectedIndex = question.options.indexOf(answer);
      setScores((prevScores) => ({
        ...prevScores,
        [category[selectedIndex]]: prevScores[category[selectedIndex]] + 1,
      }));
    } else if (question.type === "slider") {
      const categories = ["Coder", "3DArtiest", "Vormgever", "Animator"];
      const selectedCategory = categories[answer];
      setScores((prevScores) => ({
        ...prevScores,
        [selectedCategory]: prevScores[selectedCategory] + 1,
      }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const maxScoreCategory = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    window.location.href = `/pages/${maxScoreCategory}`;
  };

  const question = questions[currentQuestion];

  return (
    <div className="flex flex-col gap-12 text-center">
      {question.type === "multiple-choice" ? (
        <MultipleChoice
          question={question.question}
          options={question.options}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Slider question={question.question} handleAnswer={handleAnswer} />
      )}
      <CategoryScores scores={scores} />
    </div>
  );
};

export default QuizContainer;
