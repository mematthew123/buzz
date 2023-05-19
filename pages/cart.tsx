import Cart from "@/components/Cart";
import React, { useContext } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import CartContext from "@/context/cartContext";

const CartPage: React.FC = () => {
  const { cart } = useContext(CartContext)!;

  return (
    <div>
      <Cart /> {/* Cart component will always render */}
      {cart.length > 0 && <CheckoutForm />} {/* CheckoutForm will only render if cart length is more than 0 */}
    </div>
  );
};

export default CartPage;