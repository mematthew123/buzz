import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type FeaturedProductProps = {
  product: any; 
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const router = useRouter();

  const handleBuyNowClick = () => {
    router.push(`/products/${product._id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row border-4 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex flex-1 justify-center lg:pr-4">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-md"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-lg mb-6">{product.description}</p>
        <button
          onClick={handleBuyNowClick}
          className="bg-green-800 text-white w-full lg:w-auto px-4 py-2 rounded mt-4 hover:bg-green-700 transition-colors duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
