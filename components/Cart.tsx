import React, { useContext } from "react";
import CartContext from "@/context/cartContext";

import { useEffect } from "react";

const Cart: React.FC = () => {
  const { cart, removeFromCart, emptyCart } = useContext(CartContext)!;
  console.log(cart); // Log the state of the cart

  useEffect(() => {
    console.log("Cart component rendered");
  });
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.product.title}>
          <img src={item.product.imageUrls[0]} alt={item.product.title} />
          <h3>{item.product.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.product._id)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={emptyCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
