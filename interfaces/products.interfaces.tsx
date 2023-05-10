import { Strain } from "./strains.interfaces";



export interface ProductState {
    products: Product[];
    cart: Product[];
    cartOpen: boolean;
    categories: string[];
    currentCategory: string;
    }

export interface ProductAction {
    type: string;
    product: Product;
    products: Product[];
    category: string;
    }

export interface ProductContextProps {
    products: Product[];
    cart: Product[];
    cartOpen: boolean;
    categories: string[];
    currentCategory: string;
    addProduct: (product: Product) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    toggleCart: () => void;
    setCurrentCategory: (category: string) => void;
    }


export interface Product  extends Strain {
    id: number;
    name: string;
    type: string;
    thc: number;
    cbd: number;
    image: string;
    description: string;
    price: number;
    stock: number;
    onSale: boolean;
    quantity: number;
  }
