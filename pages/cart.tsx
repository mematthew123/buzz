import Cart from "@/components/Cart";
import React, { useContext } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import CartContext from "@/context/cartContext";
import Navbar from "@/components/Navbar";

const CartPage: React.FC = () => {
  const { cart } = useContext(CartContext)!;

  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full px-4 md:px-6 py-8 mx-auto bg-gray-50">
      <Cart /> {/* Cart component will always render */}
      {cart.length > 0 && (
        <div className="md:w-1/2 w-full">
          <CheckoutForm /> {/* CheckoutForm will only render if cart length is more than 0 */}
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
