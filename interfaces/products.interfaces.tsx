export interface Product {
  _id: string;
  title: string;
  description: string;
  type: string;
  productType: string;
  thc: string;
  cbd: string;
  price: any;
  size: string;
  imageUrls?: any[]; // Array of image URLs
  imageUrl?: string | undefined; // Single image URL
  images?: Array<{ asset: { _ref: string } }>;

}
