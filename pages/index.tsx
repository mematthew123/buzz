import Link from "next/link";
import WhyUs from "@/components/WhyUs";
import { client } from "@/sanity/lib/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
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
import Section from "@/animations/section";
import SectionRight from "@/animations/sectionRight";
import SectionUp from "@/animations/sectionUp";
import FeatureSectionContainer from "@/components/FeatureSectionContainer";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

function SwirlyDoodle({ className }: { className: string }) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 281 40'
      className={className}
      preserveAspectRatio='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z'
      />
    </svg>
  );
}

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
      featuredData,
      featuredProduct,
      featuredProducts,
    },
    revalidate: 60, // ISR, re-generate the site every 60 seconds if there's a request
  };
};

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  featuredProduct,
  featuredProducts,
  featuredData, // add the featured product prop here
}) => {
  return (
    <>
      <Head>
        <title>
          Kootanei Organics | Organic small batch cannabis in western Montana
        </title>
        <meta
          name='description'
          content='Discover Kootanei Organics and our range of organic small batch cannabis products grown in the heart of western Montana. Shop for vapes, pre-rolls, edibles and more.'
        />
      </Head>
      <div>
        <Navbar />
        <Layout>
          <Banner />
          {/* Hero section */}
          <div className='hero-section max-w-[1240px] h-[100vh] m-auto flex flex-col justify-center items-center p-4 rounded-lg'>
            <div className='hero-content flex flex-col justify-center items-center text-center sm:items-start space-y-6'>
              <h1
                className={
                  inter.className +
                  " hero-heading text-7xl font-extrabold text-[#F7FE72]"
                }
              >
                Buzz Cannabis Co.
              </h1>
              <SwirlyDoodle className='hero-doodle h-[2em] fill-green-800' />

              <p className='hero-description text-xl font-light text-slate-200'>
                See what all the buzz is about
              </p>
              <Link href='/menu'>
                <p className='cta-button inline-block px-10 py-3 text-base font-medium text-slate-200 bg-green-800 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg'>
                  Shop Now
                </p>
              </Link>
            </div>
          </div>

          <FeatureSectionContainer featuredProducts={featuredProducts} />

          <Section>
            <Featured featuredData={featuredData} />
          </Section>

          <SectionRight>
            <MenuBoard specials={[]} />
          </SectionRight>
          <SectionUp>
            <Content />
          </SectionUp>
          <WhyUs />
          <Testimonials />
          <Footer />
        </Layout>
      </div>
    </>
  );
};

export default Home;
