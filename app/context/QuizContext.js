// context/QuizContext.js
import { createContext, useContext, useState, useEffect } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [scores, setScores] = useState({
    coder: 0,
    animator: 0,
    artist: 0,
    vormgever: 0,
  });

  useEffect(() => {
    const savedScores = JSON.parse(localStorage.getItem("quizScores"));
    if (savedScores) {
      setScores(savedScores);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizScores", JSON.stringify(scores));
  }, [scores]);

  const incrementScore = (category) => {
    setScores((prevScores) => ({
      ...prevScores,
      [category]: prevScores[category] + 1,
    }));
  };

  return (
    <QuizContext.Provider value={{ scores, incrementScore }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
