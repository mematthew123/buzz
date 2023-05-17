export interface Product {
    _id: string;
    title: string;
    description: string;
    type: string;
    productType: string;
    thc: string;
    cbd: string;
    price: string;
    size: string;
    imageUrls: string[]; // Array of image URLs
  }