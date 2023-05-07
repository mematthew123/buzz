import React from 'react';

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <div className="text-left mb-4 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4">Your Call to Action</h2>
        <p className="text-lg">
          Add a brief description or some persuasive text here to encourage
          users to take action.
        </p>
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src="/shiplapCannabis.png"
          alt="A description of the image"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default CTA;
