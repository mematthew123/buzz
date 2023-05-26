import React from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // import useRouter from next/router

type FeaturedProductProps = {
  product: any; 
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  const router = useRouter(); // initialize useRouter

  const handleBuyNowClick = () => {
    router.push(`/products/${product._id}`); // navigate to the product page when Buy Now is clicked
  };
  return (
    <div className="border-lime-700 border-4 flex flex-col sm:flex-row items-center  py-10 lg:w-[1100px] mb-4">
      <div className="px-4 w-full sm:w-1/2">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-auto rounded-md"
          loading="lazy"
        />
      </div>
      <div className="px-4 align-middle   text-center mb-4 sm:mb-0">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-lg text-center max-w-md mx-auto">
          {product.description}
        </p>
        <div className="text-center">
          <button
            onClick={handleBuyNowClick}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
