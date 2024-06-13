import React from "react";
import { Slider } from "../components/Slider";
import QuitButton from "../components/QuitButton";
import { quizQuestions } from "../quizQuestions";

const page = () => {
  return (
    <div className="bg-black text-white p-24 flex flex-col h-screen gap-12 items-center justify-center">
      <div className="absolute top-4 left-4 flex gap-4">
        <QuitButton />
      </div>

      <label for="slider">
        <h1>{quizQuestions[0].question}</h1>
      </label>
      <Slider />
      {/* <input type="submit" value="Volgende" accessKey="enter"></input> */}
    </div>
  );
};

export default page;
