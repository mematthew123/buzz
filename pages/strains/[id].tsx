// pages/strains/[id].tsx
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Strain } from '../../interfaces/strains.interfaces';
import { strainData } from '../../data/strainData';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';

interface StrainPageProps {
  strain: Strain;
}

const StrainPage: React.FC<StrainPageProps> = ({ strain }) => {
  return (
    <div>
      <Navbar />
      <Layout>
        <div className='container bg-neutral-100 px-10 shadow-lg rounded-lg my-20 mx-auto mt-32   py-8'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
              <img
                src={strain.image || '/images/placeholder.png'}
                alt={strain.name}
                width={500}
                height={500}
                className='w-ful h-auto object-cover object-center rounded-lg'
              />
            </div>
            <div className='w-full md:w-1/2 px-4'>
              <h1 className='text-4xl font-bold mb-4'>{strain.name}</h1>
              <p className='text-gray-500 mb-4'>{strain.description}</p>
              <p className='text-gray-500'>
                <strong>Type:</strong> {strain.type}
              </p>
              <p className='text-gray-500'>
                <strong>THC:</strong> {strain.thc}%
              </p>
              <p className='text-gray-500'>
                <strong>CBD:</strong> {strain.cbd}%
              </p>

              <div className='mt-4'></div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default StrainPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = strainData.map((strain) => ({
    params: { id: strain.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<StrainPageProps> = async ({
  params,
}) => {
  const id = params?.id;
  const strain = strainData.find((strain) => strain.id.toString() === id);

  if (!strain) {
    return { notFound: true };
  }

  return { props: { strain } };
};
