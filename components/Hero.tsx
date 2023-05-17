import React from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/outline";
function Hero() {
  return (
    <div>
      <div className="h-[100vh] w-full relative">
        <div className="text-white absolute inset-0 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
          <h2 className="text-4xl mb-4 ">Summer styles are finally here</h2>

          <img
            src="/weedMag.jpg"
            loading="eager"
            alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
            className="absolute inset-0 object-cover h-[100vh] w-full z-0"
            draggable="false"
          />
          {/* // this is the overlay that makes the text readable */}
          <p className=" flex font-extrabold text-xl text-center align-middle left-50% top-50%  text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            This year our collection of strains is inspired by the natural
            beauty of the world around us. We’re embracing the spirit of the
            outdoors with a focus delivering the most premium cannabis
            experience possible.
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
}

export default Hero;
