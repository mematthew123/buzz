import React from "react";
import { GiFlowerPot } from "react-icons/gi";
import { Merriweather, Barlow } from "next/font/google";
import { motion } from 'framer-motion';

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

const inter = Merriweather({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "900",
});

const barlow = Barlow({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "400",
});

const WhyUs = () => {
  return (
    <div className="container mx-auto space-y-20 py-10">
      <div className="text-center space-y-10">
         <h2 className={inter.className + " text-4xl lg:text-5xl font-bold text-gray-800"}>
            Why Choose Us?
          </h2>
          <p className={barlow.className + " text-lg text-gray-600 leading-relaxed"}>
            We have over 15 years of experience in the cannabis industry and we
            are passionate about exceeding your expectations. We love our
            customers and welcome your feedback and suggestions. Use our Contact
            Us page to tell us what we’re doing right or what we can improve on.
          </p>
      </div>
      {/* features container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4.7, delay: index * 2.0, ease: "easeInOut" }}
            className="bg-gray-300 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg space-y-4"
          >
            <GiFlowerPot className="text-6xl text-white" />
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-center lg:text-lg text-white">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
