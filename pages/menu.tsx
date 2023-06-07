import React, { useState } from "react";
import { GetStaticProps } from "next";
import { client } from "../sanity/lib/client";
import { InferGetStaticPropsType } from "next";
import { Product } from "@/interfaces/products.interfaces";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";



export const getStaticProps: GetStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == "product"]{
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
  `);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};

const Menu: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  products,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProductType, setSelectedProductType] = useState("All");

  const handleProductTypeFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedProductType(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-20">
      {/* <h1 className="text-4xl font-bold mb-8">Menu</h1> */}
      <div className="flex justify-end mb-4">
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="w-full md:w-auto mb-4 md:mb-0"
        >
          <option value="All">All</option>
          <option value="Sativa">Sativa</option>
          <option value="Indica">Indica</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="flex justify-end mb-4">
        <select
          value={selectedProductType}
          onChange={handleProductTypeFilterChange}
          className="w-full md:w-auto mb-4 md:mb-0 ml-4"
        >
          <option value="All">All</option>
          <option value="Vape">Vape</option>
          <option value="Edible">Edible</option>
          <option value="Flower">Flower</option>
          {/* Add more product types as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products
          .filter(
            (product: { type: string; productType: string }) =>
              (selectedFilter === "All"
                ? true
                : product.type === selectedFilter) &&
              (selectedProductType === "All"
                ? true
                : product.productType === selectedProductType)
          )
          .map((product: Product) => (
            <div
              key={product._id}
              className="border border-gray-300 p-4 rounded-lg"
            >
              <Image
                src={product.imageUrl || "/images/placeholder.png"}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-64 object-cover object-center mb-4"
              />
              <Link href={`/products/${product._id}`}>
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              </Link>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-600">
                <strong>Type:</strong> {product.type}
              </p>
              <p className="text-gray-600">
                <strong>THC:</strong> {product.thc}%
              </p>
              <p className="text-gray-600">
                <strong>CBD:</strong> {product.cbd}%
              </p>
              <p className="text-gray-600">
                <strong>Price:</strong> ${product.price}
              </p>
              <p className="text-gray-600">
                <strong>Size:</strong> {product.size}
              </p>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default Menu;
