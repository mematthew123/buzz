import React from "react";
import { strainData } from "../data/strainData";
import StrainCard from "./StrainCard";
import { Strain } from "../interfaces/strains.interfaces";

const StrainList: React.FC = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8'>
      {strainData.map((strain: Strain) => (
        <StrainCard key={strain.id} strain={strain} />
      ))}
    </div>
  );
};

export default StrainList;
