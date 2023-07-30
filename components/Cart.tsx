import React, { useContext, useEffect } from "react";
import CartContext from "@/context/cartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart, emptyCart } = useContext(CartContext)!;

  useEffect(() => {
    console.log("Cart component rendered");
  });

  return (
    <div className='container mx-auto px-6 py-8 bg-white rounded-xl shadow-md space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-800'>Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.product.title}
          className='flex flex-wrap -mx-4 bg-gray-100 p-4 rounded-lg shadow-sm'
        >
          <div className='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
            <img
              src={item.product.imageUrls[0]}
              alt={item.product.title}
              className='shadow-lg rounded-lg overflow-hidden h-96 w-full object-cover'
            />
          </div>
          <div className='w-full md:w-1/2 px-4'>
            <h3 className='text-xl font-medium text-gray-800'>
              {item.product.title}
            </h3>
            <p className='text-gray-500 mt-2'>Quantity: {item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.product._id)}
              className='mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* {cart.length > 0 && (
        <button
          onClick={emptyCart}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Clear Cart
        </button>
      )} */}
    </div>
  );
};

export default Cart;
