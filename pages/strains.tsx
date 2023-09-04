/* eslint-disable react/no-unescaped-entities */
import StrainList from '@/components/StrainList';
import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '@/components/Layout';
import { Fraunces } from 'next/font/google';

const inter = Fraunces({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-fraunces',
  weight: '900',
});

const StrainsPage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className=' mt-10 lg:mt-20 items-center text-center flex flex-col min-h-screen'>
          <main className='container mx-auto p-4'>
            <h2
              className={
                inter.className +
                ' text-5xl my-20 font-extrabold text-[#F7FE72]'
              }
            >
              Strains
            </h2>{' '}
            <p className='text-2xl mb-10 text-[#F7FE72]'>
              Here our some of our most popular strains you won't find anywhere
              else!
            </p>
            <StrainList />
          </main>
        </div>
      </Layout>
    </>
  );
};

export default StrainsPage;
