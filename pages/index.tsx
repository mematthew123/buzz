import { Inter } from "next/font/google";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
import FeatureSection from "@/components/FeatureSection";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import { client } from "@/sanity/lib/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { getFeaturedProduct } from "@/sanity/queries/getProducts";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  const [heroData, featuredProduct] = await Promise.all([
    client.fetch(`
      *[_type == "hero"][0]{
        title,
        description,
        "heroImage": heroImage.asset->url,
        "alt": heroImage.alt
      }
    `),
    client.fetch(getFeaturedProduct),
  ]);

  return {
    props: {
      heroData,
      featuredProduct,
    },
    revalidate: 60, // ISR, re-generate the site every 60 seconds if there's a request
  };
};

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  heroData,
  featuredProduct, // add the featured product prop here
}) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="h-[90vh] w-full relative">
          <div className="text-gray-50 absolute inset-0 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
            {/* <Image
              src="/magazine.jpg"
              loading="eager"
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="absolute inset-0 object-cover h-[95vh] w-full z-0"
              draggable="false"
              width={1200}
              height={800}
            /> */}
            {/* <div className=" bg-gray-600 bg-blend-overlay bg-opacity-50 absolute inset-0"></div> */}

            <h1 className="  drop-shadow-lg flex font-extrabold underline text-6xl  text-center align-middle left-50% top-50% mb-6  shadow-black">
              Kootanei Organics
            </h1>
            <p className="  flex font-extrabold  text-center align-middle left-50% top-50%    mb-6 drop-shadow-lg shadow-black">
              Organic small batch cannabis grown in the heart of western Montana
            </p>
          </div>
        </div>
        <Link href="/menu">
          <div className="flex items-center font-bold underline  text-xl border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
            <span>Shop Now</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </Link>
        <div className=" flex justify-center items-center text-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <FeatureSection
              category="CATEGORY"
              title="Vapes Carts"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
            <FeatureSection
              category="CATEGORY"
              title="Pre-Rolls"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
            <FeatureSection
              category="CATEGORY"
              title="Edibles"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
          </div>
        </div>
        <CTA />
        <WhyUs />
        <FeaturedProduct product={featuredProduct} />{" "}
        {/* Render the FeaturedProduct component */}
      </div>
    </>
  );
};

export default Home;
