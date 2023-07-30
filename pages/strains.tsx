import StrainList from "@/components/StrainList";
import React from "react";
import Navbar from "../components/Navbar";
import Layout from "@/components/Layout";

const StrainsPage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className=' mt-10 lg:mt-20 items-center text-center flex flex-col min-h-screen'>
          <main className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Our Strains</h1>
            <StrainList />
          </main>
        </div>
      </Layout>
    </>
  );
};

export default StrainsPage;
