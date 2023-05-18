import React from "react";
import Image from "next/image";
import { GiFlowerPot } from "react-icons/gi";

const features = [
  {

    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {

    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {

    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const WhyUs = () => {
  return (
    <div className=" outline-2 outline-lime-800 border-4 border-lime-500 mx-auto container lg:h-auto sm:h-[1200px] ">
      <div className="mx-auto text-center rounded-lg">
\          <h2 className="font-bold pt-20  text-gray-800 text-[40px] leading-[48px] text-center">
            Why choose us?
          </h2>
          <p className="pt-10 lg:pt-20 line-clamp-3 text-gray-800 text-[20px] leading-[28px] text-center">
            We have over 15 years of experience in the cannabis industry and we
            are passionate about exceeding your expectations. We love our
            customers and welcome your feedback and suggestions. Use our Contact
            Us page to tell us what we’re doing right or what we can improve on.
          </p>

          {/* features container */}

          <div className="px-20 py-12 grid lg:grid-cols-3 grid-cols-1 gap-1 lg:gap-3 mx-auto items-center align-middle gap-y-8 sm:gap-y-12">
            {features.map(({   title, description }, index) => (
              <div
                key={index}
                className="py-4 bg-gray-300 flex flex-col items-center align-middle h-[200px]  lg:h-[350px] justify-center rounded-lg"
              >
                <GiFlowerPot className="text-6xl text-white" />
                <h3 className="align-middle text-white">{title}</h3>
                <p className="align-middle lg:text-lg py-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default WhyUs;
