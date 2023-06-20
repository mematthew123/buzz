import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import React from "react";
import { Fraunces } from "next/font/google";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

const contact = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <h2
          className={inter.className + " flex justify-center text-7xl font-extrabold text-gray-800"}
        >
         Coming soon
        </h2>
      </Layout>
    </div>
  );
};

export default contact;
