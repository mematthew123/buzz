import React from "react";
import Link from "next/link";

type TextPosition = "left" | "center" | "right";

interface FeaturedData {
  title: string;
  description: string;
  featuredImage: string;
  alt: string;
  textPosition: TextPosition;
}

const Featured: React.FC<{ featuredData: FeaturedData }> = ({
  featuredData,
}) => {
  const textPositionClasses: Record<TextPosition, string> = {
    left: "justify-start items-start",
    center: "justify-center items-center",
    right: "justify-end items-end",
  };

  console.log(featuredData.textPosition);

  const positionClass =
    textPositionClasses[featuredData.textPosition] ||
    "justify-center items-center";
  // we want to have half the screen be the image and the other half be the text
  return (
    <div className="bg-[#E9EDC9] flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mb-20 rounded-md shadow-lg border border-gray-200">
      <div className="w-full lg:w-1/2 text-center">
        <img
          src={featuredData.featuredImage}
          alt={featuredData.alt}
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      <h2 className="text-3xl font-bold mb-2">{featuredData.title}</h2>
      <p className="text-lg mb-4 max-w-md mx-auto">
        {featuredData.description}
      </p>
    </div>
  );
};

export default Featured;
