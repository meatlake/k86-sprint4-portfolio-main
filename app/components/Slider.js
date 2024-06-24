import { useState } from "react";

const Slider = ({ question, handleAnswer }) => {
  const min = 0;
  const max = 3;
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleSubmit = () => {
    handleAnswer(value);
  };

  return (
    <div className="bg-bg-slider flex flex-col items-center justify-center h-[100vh] w-[100vw]">
      <p className="text-3xl font-semibold">{question}</p>
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={handleChange}
        className="appearance-none forced-colors:appearance-auto w-full lg:w-[1000px] lg:mt-24 h-1 rounded-full"
      />
      <div className="mt-24 text-2xl font-semibold">
        {["Volledig mee eens", "Eens", "Oneens", "Volledig mee oneens"][value]}
      </div>
      <button
        className="border-2 text-xl font-medium border-transparent bg-white text-black px-4 py-2 hover:border-white hover:bg-black hover:text-white transition-all duration-200 ease-in-out mt-12"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Slider;
