import { useState } from "react";

const MultipleChoice = ({ question, options, handleAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
    handleAnswer(option);
  };

  return (
    <div className="bg-bg-quiz px-12 h-[100vh] w-[100vw]">
      <div className="lg:mt-24 flex flex-col lg:gap-12">
        <p className="text-2xl font-bold">{question}</p>
        <div className="grid grid-cols-2 gap-2">
          {options.map((option, index) => (
            <button
              key={index}
              className={`${
                selected === option ? "selected" : ""
              } border-white border-2 lg:h-[200px] lg:text-xl font-semibold`}
              onClick={() => handleClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;
