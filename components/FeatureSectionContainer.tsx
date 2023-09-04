import React from "react";
import FeatureSection from "./FeatureSection";
import { client } from "@/sanity/lib/client";
import { Fraunces } from "next/font/google";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export async function getStaticProps() {
  const featuredProducts = await client.fetch(
    `
*[_type == "product" && featured == true]{
  _id,
  title,
  description,
  type,
  productType,
  thc,
  cbd,
  price,
  size,
  "imageUrl": images[0].asset->url,
}
`
  );

  return {
    props: {
      featuredProducts,
    },
  };
}

type Props = {
  featuredProducts: any;
};

const FeatureSectionContainer: React.FC<Props> = ({
  featuredProducts,
}: Props) => {
  return (
    <div className='container px-5 py-24 rounded-lg mx-auto'>
      <h1
        className={
          inter.className +
          " text-7xl text-center font-extrabold text-[#F7FE72]"
        }
      >
        Featured Products
      </h1>{" "}
      <div className='flex flex-wrap -m-4'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {featuredProducts.map((product: any) => (
            <div key={product._id}>
              <FeatureSection
                category={product.type}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
              />
              <hr />
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default FeatureSectionContainer;
