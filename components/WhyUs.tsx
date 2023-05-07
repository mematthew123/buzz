import React from "react";
import Image from "next/image";

const features = [
  {
    image: "/shiplapCannabis.png",
    alt: "Best quality",
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: "/shiplapCannabis.png",
    alt: "Exclusive benefits",
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: "/shiplapCannabis.png",
    alt: "Free shipping",
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const WhyUs = () => {
  return (
    <div className="mx-auto container h-[1200px] sm:mb-12">
      <div className="mx-auto text-center rounded-lg">
        <div className="lg:h-[577px] lg:w-[1280px] relative bg-dark-grey-blue h-[902px] rounded-lg">
          <h2 className="font-bold pt-20 lg:pt-10 text-white text-[40px] leading-[48px] text-center">
            Why choose us?
          </h2>
          <p className="pt-10 lg:pt-20  ">
            A large part of our role is choosing which particular coffees will
            be featured
            <br />
            in our range. This means working closely with the best coffee
            growers to give
            <br />
            you a more impactful experience on every level.
          </p>

          {/* features container */}

          <div className="px-20 py-12 grid lg:grid-cols-3 grid-cols-1 gap-1 lg:gap-3 mx-auto items-center align-middle gap-y-8 sm:gap-y-12">
            {features.map(({ image, alt, title, description }, index) => (
              <div
                key={index}
                className="py-4 bg-gray-300 flex flex-col items-center align-middle h-[382px]  lg:h-[350px] justify-center rounded-lg"
              >
                <Image
                  src={image}
                  alt={alt}
                  width={48}
                  height={48}
                  className="rounded-lg mb-4"
                />
                <h3 className="align-middle text-white">{title}</h3>
                <p className="align-middle lg:text-lg py-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
