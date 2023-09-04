export const getFeaturedProduct = `
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
`;
