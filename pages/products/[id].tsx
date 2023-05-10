// pages/products/[id].tsx
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Product } from "../../interfaces/products.interfaces";
import { productData } from "../../data/productData";

interface ProductsPageProps {
    product: Product;
}

const ProductPage: React.FC<ProductsPageProps> = ({ product }) => {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
            <div className="flex justify-between items-start gap-8">
                <div className="w-1/2">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover object-center rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-1/2 space-y-4">
                    <p className="text-gray-600">{product.description}</p>
                    <div>
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
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = productData.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProductsPageProps> = async ({ params }) => {
    const id = params?.id;
    const product = productData.find((product) => product.id.toString() === id);

    if (!product) {
        return { notFound: true };
    }

    return { props: { product } };
};
