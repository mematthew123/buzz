import Cart from "@/components/Cart";
import React, { useContext } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import CartContext from "@/context/cartContext";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

const CartPage: React.FC = () => {
  const { cart } = useContext(CartContext)!;

  return (
    <>
      <Navbar />
      <Layout>
      <div className=' mt-20 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full px-4 md:px-6 py-8 mx-auto bg-gray-50 rounded-lg'>
        <Cart /> {/* Cart component will always render */}
        {cart.length > 0 && (
          <div className='md:w-1/2 w-full'>
            <CheckoutForm />{" "}
            {/* CheckoutForm will only render if cart length is more than 0 */}
          </div>
        )}
      </div>
      </Layout>
    </>
  );
};

export default CartPage;
