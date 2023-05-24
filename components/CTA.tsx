/* eslint-disable @next/next/no-img-element */
import React from "react";
import QuizModal from "./QuizModal";

const CTA = () => {
  return (
    <div className=" border-4 border-lime-500 flex flex-col sm:flex-row items-center py-10 lg:w-[1100px] mb-4">
      <div className=" px-4 text-center mb-4 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4">Your Call to Action</h2>
        <p className="text-lg text-center max-w-md mx-auto">
          Add a brief description or some persuasive text here to encourage
          users to take action.
        </p>
        <div className="text-center">
          <QuizModal />
        </div>
      </div>
      <div className=" px-4 w-full sm:w-1/2">
        <img
          src="/shiplapCannabis.png"
          alt="A description of the image"
          className="w-full h-auto rounded-md"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CTA;
