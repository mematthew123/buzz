import { Inter } from "next/font/google";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import FeatureSection from "@/components/FeatureSection";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import { client } from "@/sanity/lib/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { getFeaturedProduct } from "@/sanity/queries/getProducts";
import Navbar from "@/components/Navbar";
import { Fraunces } from "next/font/google";
import MenuBoard from "@/components/MenuBoard";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Featured from "@/components/Featured";
import Head from "next/head";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import CTARight from "@/components/CTARight";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export const getStaticProps: GetStaticProps = async () => {
  const [featuredData, featuredProduct] = await Promise.all([
    client.fetch(`
    *[_type == "featured"][0]{
      title,
      description,
      "featuredImage": featuredImage.asset->url,
      "alt": featuredImage.alt,
      textPosition
    }
    `),
    client.fetch(getFeaturedProduct),
  ]);

  return {
    props: {
      featuredData,
      featuredProduct,
    },
    revalidate: 60, // ISR, re-generate the site every 60 seconds if there's a request
  };
};

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featuredProduct,
  featuredData, // add the featured product prop here
}) => {
  return (
    <>
      <Head>
        <title>
          Kootanei Organics | Organic small batch cannabis in western Montana
        </title>
        <meta
          name="description"
          content="Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more."
        />
      </Head>
      <div>
        <Navbar />
        <Layout>
          <Banner />
          {/* Hero section */}
{/* Hero section */}
<div className="hero bg-[#FAEDCD] border border-gray-200 shadow-lg max-w-[1240px] h-[80vh] m-auto flex flex-col justify-center items-center p-4 rounded-lg">
  <div className="hero-content flex flex-col justify-center items-center text-center sm:items-start space-y-6">
    <h1 className={inter.className + " text-7xl font-extrabold text-gray-800"}>
      Kootanei Organics
    </h1>
    <p className="text-xl font-light text-gray-600">
      Organic small batch cannabis grown in the heart of western Montana
    </p>
    <Link href="/menu">
      <p className="inline-block px-10 py-3 text-base font-medium text-white bg-green-800 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg">
        Shop Now
      </p>
    </Link>
  </div>
</div>


          {/* <div className=" flex lg:w-[1400px] bg-[#E9EDC9] mb-[80px] lg:mb-[150px] justify-center items-center text-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            <FeatureSection
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 2.5, ease: "easeInOut" }}
              category="CATEGORY"
              title="Vapes Carts"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
            <FeatureSection
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 3.0, ease: "easeInOut" }}
              category="CATEGORY"
              title="Pre-Rolls"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
            <FeatureSection
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 3.5, ease: "easeInOut" }}
              category="CATEGORY"
              title="Edibles"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
            />
          </div>
        </div> */}
          <Featured featuredData={featuredData} />

          <MenuBoard specials={[]} />
          {/* <FeaturedProduct product={featuredProduct} /> */}
          <Content />
          {/* <CTARight /> */}
          <WhyUs />
          <Testimonials />

          <Footer />
        </Layout>
      </div>
    </>
  );
};

export default Home;
