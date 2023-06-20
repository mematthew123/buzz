import { GetStaticProps, InferGetStaticPropsType } from "next";
import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

import { Fraunces } from "next/font/google";

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

export const getStaticProps: GetStaticProps = async () => {
  const heroData = await client.fetch(`
  *[_type == "hero"][0]{
    title,
    description,
    "heroImage": heroImage.asset->url,
    "alt": heroImage.alt,
    textPosition
  }
`);

  return {
    props: {
      heroData,
    },
    revalidate: 60, // ISR, re-generate the site every 60 seconds if there's a request
  };
};

const aboutPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  heroData,
}) => {
  return (
    <div>
      <Navbar />
      <Layout>
        <h2
          className={
            inter.className +
            " flex justify-center text-7xl font-extrabold text-gray-800"
          }
        >
          Coming soon
        </h2>
      </Layout>
    </div>
  );
};

export default aboutPage;
