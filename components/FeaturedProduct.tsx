import React from "react";
import Image from "next/image";

type FeaturedProductProps = {
  product: any; // replace 'any' with the type of your product
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={500}
        height={500}
        className="w-full h-64 object-cover object-center mb-4"
      />{" "}
      <p>{product.description}</p>
      {/* display other product details */}
    </div>
  );
};

export default FeaturedProduct;
