import { GetStaticProps, InferGetStaticPropsType } from "next";
import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";  // import the FeaturedProduct component
import { getFeaturedProduct } from "@/sanity/queries/getProducts";  // import the featured product query

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

const aboutPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  heroData,
  featuredProduct,  // add the featured product prop here
}) => {
  return (
    <div>
      <Hero heroData={heroData} />
      <FeaturedProduct product={featuredProduct} />  {/* Render the FeaturedProduct component */}
      {/* Rest of your page components go here */}
    </div>
  );
};

export default aboutPage;
