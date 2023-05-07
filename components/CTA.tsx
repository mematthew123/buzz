import React from "react";
import QuizModal from "./QuizModal";

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-10 mb-4">
      <div className="text-center mb-4 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4">Your Call to Action</h2>
        <p className="text-lg text-center max-w-md mx-auto">
          Add a brief description or some persuasive text here to encourage
          users to take action.
        </p>
        <div className="text-center">
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Take Action
          </button> */}
          <QuizModal />
        </div>
      </div>
      <div className="w-full sm:w-1/2">
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
