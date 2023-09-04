import React from 'react';
import { StrainCardProps } from '../interfaces/strains.interfaces';
import Link from 'next/link';
import Image from 'next/image';

const StrainCard: React.FC<StrainCardProps> = ({ strain }) => {
  return (
    <div className='flex flex-col w-full h-full p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out'>
      <Image
        src={strain.image || '/images/placeholder.png'}
        alt={strain.name}
        width={500}
        height={500}
        className='w-full h-48 object-cover object-center rounded-t-lg'
      />

      <div className='px-4 py-2 flex-grow'>
        <h3 className='text-2xl font-bold mb-2 truncate'>{strain.name}</h3>
        <p className='text-xl mb-1'>{strain.type}</p>
        <p className='text-xl mb-1'>THC: {strain.thc}%</p>
        <p className='text-xl mb-1'>CBD: {strain.cbd}%</p>
      </div>

      <Link href={`/strains/${strain.id}`}>
        <p className='block w-full text-center px-10 py-3 text-base font-medium text-slate-200 bg-cyprus-700 rounded-lg hover:bg-[#F7FE72] hover:text-cyprus-950 transition-colors duration-200 shadow-md hover:shadow-lg'>
          View Strain
        </p>
      </Link>
    </div>
  );
};

export default StrainCard;
