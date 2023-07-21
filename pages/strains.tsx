import StrainList from "@/components/StrainList";
import React from "react";
import Navbar from "../components/Navbar";

const StrainsPage = () => {
  return (
    <>
      <Navbar />
      <div className=' mt-10 lg:mt-20 items-center text-center flex flex-col min-h-screen bg-gray-100'>
        <main className='container mx-auto p-4'>
          <h1 className='text-3xl font-bold mb-4'>Our Strains</h1>
          <StrainList />
        </main>
      </div>
    </>
  );
};

export default StrainsPage;
