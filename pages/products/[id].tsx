import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "../../sanity/lib/client";
import { useRouter } from "next/router";
import { Product } from "@/interfaces/products.interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const product = await client.fetch(`
    *[_type == "product" && _id == "${id}"]{
      _id,
      title,
      description,
      type,
      productType,
      thc,
      cbd,
      price,
      size,
      "imageUrls": images[].asset->url, // Fetch all images
    }
  `);

  return {
    props: {
      product: product[0],
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await client.fetch(`
    *[_type == "product"]{
      _id
    }
  `);

  const paths = products.map((product: { _id: any }) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: "blocking" };
};

const ProductPage: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // You can customize this as per your needs
  }

  return (
    <div className="container mx-auto px-6 py-8 h-[400px] w-[550px]">
      <h1>{product.title}</h1>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {product.imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={product.title}
              className="h-[400px] w-[550px] aspect-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Rest of the product details */}
    </div>
  );
};

export default ProductPage;
