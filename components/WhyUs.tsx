import React from 'react';
import { GiFlowerPot } from 'react-icons/gi';
import { Merriweather, Barlow } from 'next/font/google';
import { motion } from 'framer-motion';
import { FaCannabis } from 'react-icons/fa';
import SectionRight from '@/animations/sectionRight';
import SectionUp from '@/animations/sectionUp';
import { PortableText } from '@portabletext/react';

const features = [
  {
    title: '100% Organic',
    description:
      'Our cannabis is grown 100% organically, with no pesticides or herbicides.',
  },
  {
    title: 'Solventless',
    description:
      'We use only solventless extraction methods to ensure the highest quality.',
  },
  {
    title: 'Experienced',
    description:
      'We have over 15 years of experience in the cannabis industry.',
  },
];

const inter = Merriweather({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-display',
  weight: '900',
});

const barlow = Barlow({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-display',
  weight: '400',
});

const WhyUs = () => {
  return (
    <div className='container mt-20 lg:mt-40 mx-auto space-y-20  py-10 bg-[#E9EDC9] px-4 rounded-lg shadow-lg border border-gray-200'>
      <div className='relative mx-auto max-w-7xl px-6 py-4 lg:px-8 space-y-10'>
        <h2
          className={
            inter.className + 'text-4xl lg:text-5xl font-bold text-gray-800'
          }
        >
          Why Choose Us?
        </h2>
        <SectionUp>
          <div className='mx-auto max-w-prose text-base lg:max-w-none'>
            <p
              className={
                barlow.className + ' text-lg text-gray-500 leading-relaxed'
              }
            >
              {' '}
              We have over 15 years of experience in the cannabis industry and
              we are passionate about exceeding your expectations. We love our
              customers and welcome your feedback and suggestions. Use our
              Contact Us page to tell us what we’re doing right or what we can
              improve on.
            </p>
          </div>
        </SectionUp>
      </div>
      {/* features container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map(({ title, description }, index) => (
          <div
            key={index}
            className='bg-[#abd1c6] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg space-y-4'
          >
            <SectionRight>
              <FaCannabis className='text-6xl text-[#004643]' />
            </SectionRight>
            <SectionUp>
              <h3 className='text-2xl font-semibold text-[#004643]'>{title}</h3>
            </SectionUp>
            <SectionUp>
              <p className='text-center lg:text-lg text-[#004643]'>
                {description}
              </p>
            </SectionUp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
