import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  category: string;
  title: string;
  description: string;
}

const FeatureSection = ({
  category,
  title,
  description,
}: FeatureSectionProps) => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-[400px] md:w-1/2">
            <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {category}
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                {title}
              </h1>
              <p className="leading-relaxed mb-3">{description}</p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
