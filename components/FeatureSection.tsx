import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FeatureSectionProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string; 
  initial?: Object;
  animate?: Object;
  transition?: Object;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  category,
  title,
  description,
  imageUrl,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.section
      className='text-gray-500 body-font'
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <div className='container px-5 py-24 mx-auto'>
        <Link href='/menu'>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 lg:w-[400px] md:w-1/2'>
              <div className='h-full  bg-[#E9EDC9] border border-gray-200  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-2xl'>
                <Image
                  src={imageUrl}
                  alt={title}
                  width={600}
                  height={600}
                  className=' aspect-auto h-56 w-56 object-cover object-center rounded-lg inline-block  '
                />{' '}
                {/* Image component from Next.js */}
                <h2 className='tracking-widest my-4 text-base title-font font-medium text-gray-500 mb-3'>
                  {category}
                </h2>
                <h1 className='title-font  sm:text-2xl text-3xl font-medium text-gray-900 mb-5'>
                  {title}
                </h1>
                <p className='leading-relaxed text-lg mb-5 text-ellipsis line-clamp-2'>
                  {description}
                </p>
                <Link href='/menu'>
                  <p className=' text-gray-900 text-lg inline-flex items-center mt-4 transition-colors duration-200 transform hover:scale-105'>
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
