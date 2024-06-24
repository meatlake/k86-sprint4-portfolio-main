import QuitButton from "@/app/components/QuitButton";
import QuizContainer from "@/app/components/QuizContainer";
import React from "react";

const page = () => {
  return (
    <div className="h-[100vh] bg-black text-white">
      <QuitButton />
      <QuizContainer />
    </div>
  );
};

export default page;
