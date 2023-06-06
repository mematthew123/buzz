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
  featuredProduct,  // add the featured product prop here
}) => {
  return (
    <>
      <div>
        <div className="h-[95vh] w-full relative">
          <div className="text-white absolute inset-0 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
            <Image
              src="/magazine.jpg"
              loading="eager"
              alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
              className="absolute inset-0 object-cover h-[95vh] w-full z-0"
              draggable="false"
              width={1200}
              height={800}


            />
            <div className=" bg-gray-600 bg-blend-overlay bg-opacity-50 absolute inset-0"></div>

            <h1 className=" flex font-extrabold underline text-7xl  text-center align-middle left-50% top-50% mb-6 drop-shadow-md shadow-black">
              Summer time is here
            </h1>
            <p className=" flex font-extrabold  text-center align-middle left-50% top-50%  text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
              Organic small batch cannabis grown in the heart of western Montana
              Perfect for the summer season in the mountains and on the lake
            </p>
          </div>
        </div>
        <Link href="/menu">
          <div className="flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
            <span>Check it out</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </Link>
        <h2 className="text-4xl font-bold text-center mt-20 mb-8">
          {" "}
          Featured Products
        </h2>

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
        <FeaturedProduct product={featuredProduct} />  {/* Render the FeaturedProduct component */}
      </div>
    </>
  );
}

export default Home;
