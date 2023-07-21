import React from "react";
import { StrainCardProps } from "../interfaces/strains.interfaces";
import Link from "next/link";
import Image from "next/image";

const StrainCard: React.FC<StrainCardProps> = ({ strain }) => {
  return (
    <div className='flex flex-col w-full h-full p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out'>
      <Image
        src={strain.image || "/images/placeholder.png"}
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
        <p className='text-xl mb-1'>Price: ${strain.price}</p>
        <p className='text-xl mb-1'>
          Stock:{" "}
          {strain.stock > 0 ? `${strain.stock} available` : `Out of stock`}
        </p>
      </div>

      {strain.stock > 0 && (
        <Link href={`/strains/${strain.id}`}>
          <p className='block w-full text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-b-lg font-bold transition-all duration-300'>
            View Strain
          </p>
        </Link>
      )}
    </div>
  );
};

export default StrainCard;
