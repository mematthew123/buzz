import React from "react";
import { Product } from "@/interfaces/products.interfaces";
import Link from "next/link";
import Image from "next/image";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className='border border-slate-200 p-4 rounded-lg'>
    <Image
      src={product.imageUrl || "/images/placeholder.png"}
      alt={product.title}
      width={500}
      height={500}
      className='w-full h-64 object-cover object-center mb-4'
    />
    <Link href={`/products/${product._id}`}>
      <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
    </Link>
    <p className='text-slate-200 mb-4'>{product.description}</p>
    <p className='text-slate-200'>
      <strong>Type:</strong> {product.type}
    </p>
    <p className='text-slate-200'>
      <strong>THC:</strong> {product.thc}%
    </p>
    <p className='text-slate-200'>
      <strong>CBD:</strong> {product.cbd}%
    </p>
    <p className='text-slate-200'>
      <strong>Price:</strong> ${product.price}
    </p>
    <p className='text-slate-200'>
      <strong>Size:</strong> {product.size}
    </p>
  </div>
);

export default ProductCard;
