import FeatureSection from "../components/FeatureSection";
import { client } from "@/sanity/lib/client";

export async function getStaticProps() {
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
      featuredProducts,
    },
  };
}

type Props = {
  featuredProducts: any;
};

export default function Test({ featuredProducts }: Props) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {featuredProducts.map((product: any) => (
        <div key={product._id}>
          <FeatureSection
            category={product.type}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}
