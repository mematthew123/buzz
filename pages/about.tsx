import { GetStaticProps, InferGetStaticPropsType } from "next";
import { client } from "@/sanity/lib/client";
import Hero from "@/components/Hero";

export const getStaticProps: GetStaticProps = async () => {
  const heroData = await client.fetch(`
    *[_type == "hero"][0]{
      title,
      description,
      "heroImage": heroImage.asset->url,
      "alt": heroImage.alt
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
      <Hero heroData={heroData} />
      {/* Rest of your page components go here */}
    </div>
  );
};

export default aboutPage;
