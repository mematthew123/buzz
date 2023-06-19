import React, { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import Image from "next/image";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textPositionClasses: Record<TextPosition, string> = {
    left: "lg:items-start lg:text-left",
    center: "items-center text-center",
    right: "lg:items-end lg:text-right",
  };

  const positionClass =
    textPositionClasses[featuredData.textPosition] ||
    textPositionClasses.center;

  return (
    <>
      <div className="bg-[#E9EDC9] flex flex-col lg:flex-row p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:max-w-7xl mx-auto my-20 rounded-lg shadow-lg border border-gray-200">
        <div className="lg:w-1/2 aspect-auto shadow-inner">
          <Image
            src={featuredData.featuredImage}
            alt={featuredData.alt}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>

        <div
          className={`flex-1 flex flex-col justify-center ${positionClass} space-y-4`}
        >
          <h2 className="text-3xl font-extrabold text-gray-800">
            {featuredData.title}
          </h2>
          <p className="text-lg text-gray-600">{featuredData.description}</p>
          <Link href="/swedeMenu">
            <p className="inline-block bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              Buy Now
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Featured;
