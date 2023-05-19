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
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-4xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.product.title} className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <img
              src={item.product.imageUrls[0]}
              alt={item.product.title}
              className="shadow-lg rounded-lg overflow-hidden h-96 w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-2">{item.product.title}</h3>
            <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.product._id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* we only want to render these buttons if the cart length is more than 0 */}
      {cart.length > 0 && (
        <button
          onClick={emptyCart}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
