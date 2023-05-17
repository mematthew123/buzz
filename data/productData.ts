// productData.ts

export interface Product {
    id: number;
    name: string;
    type: string;
    thc: number;
    cbd: number;
    image: string;
    description: string;
    price: number;
    size: string;
    productType: string;
  }
  
  export const productData: Product[] = [
    {
      id: 1,
      name: "Vape Pen 1",
      type: "Sativa",
      thc: 18,
      cbd: 1,
      image: "/path/to/image.jpg",
      description: "A great product for daytime use.",
      price: 25,
      size: "1/8",
      productType: "Vape",
    },
    {
      id: 2,
      name: "Flower 1",
      type: "Indica",
      thc: 20,
      cbd: 1,
      image: "/path/to/image.jpg",
      description: "A great product for nighttime use.",
      price: 25,
      size: "1/8",
        productType: "Flower",

    },
    {
      id: 3,
      name: "Vape Pen 2",
      type: "Hybrid",
      thc: 25,
      cbd: 1,
      image: "/path/to/image.jpg",
      description: "A great product for anytime use.",
      price: 25,
      size: "1/8",
      productType: "Vape",
    },
    {
      id: 4,
      name: "Flower 2",
      type: "Sativa",
      thc: 18,
      cbd: 1,
      image: "/path/to/image.jpg",
      description: "A great product for daytime use.",
      price: 25,
      size: "1/8",
        productType: "Flower",
    },
    {
      id: 5,
      name: "Edible 1",
      type: "Sativa",
      thc: 10,
      cbd: 5,
      image: "/path/to/image.jpg",
      description: "Delicious gummies for a balanced experience.",
      price: 20,
      size: "100mg pack",
      productType: "Edible",
    },
    {
      id: 6,
      name: "Edible 2",
      type: "Indica",
      thc: 15,
      cbd: 2,
      image: "/path/to/image.jpg",
      description: "Chocolate bar perfect for relaxation.",
      price: 15,
      size: "50mg bar",
      productType: "Edible",
    },
    // Add more products as needed
  ];
  