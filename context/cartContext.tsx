import React, { createContext, useState, ReactNode } from "react";
import { Product } from "@/interfaces/products.interfaces";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  console.log(cart); // Log the state of the cart

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex(
        (item) => item.product._id === product._id
      );
      if (index >= 0) {
        // Product already in cart, just increase quantity
        const newCart = [...currentCart];
        newCart[index].quantity += quantity;
        console.log("Product is already in the cart. Updated cart: ", newCart); // Debugging line
        return newCart;
      } else {
        // Product not in cart, add new item
        const newCart = [...currentCart, { product, quantity }];
        console.log("Product is not in the cart. Updated cart: ", newCart); // Debugging line
        return newCart;
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.product._id !== productId)
    );
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
