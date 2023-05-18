import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Hero: React.FC<{ heroData: any }> = ({ heroData }) => {
  return (
    <div>
      <div className="h-[100vh] w-full relative">
        <div className="text-white absolute inset-0 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          <h2 className="text-4xl mb-4">{heroData.title}</h2>
          <img
            src={heroData.heroImage}
            alt={heroData.alt}
            className="absolute inset-0 object-cover h-[100vh] w-full z-0"
            draggable="false"
          />
          <p className=" flex font-extrabold text-xl text-center align-middle left-50% top-50%  text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            {heroData.description}
          </p>
          <button className="flex items-center justify-center w-40 h-12 bg-primary-500 rounded-full text-white text-base-regular font-bold drop-shadow-md shadow-black">
            Available Strains
          </button>
        </div>
        <Link href="/strains">
          <div className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
            <span>Check it out</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
