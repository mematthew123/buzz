export const getFeaturedProduct = `
  *[_type == "featuredProduct"]{
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
  }[0]
`;

type FeaturedProductProps = {
  product: any; // replace 'any' with the type of your product
};