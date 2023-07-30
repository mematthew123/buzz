import router from "next/router";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "@/context/cartContext";

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CheckoutForm must be used within a CartProvider");
  }
  // Retrieve the items in the user's cart from the CartContext
  const { emptyCart } = cartContext;

  const handleOrderConfirmation = async () => {
    console.log("Confirm order");
    router.push("/thank-you"); // redirect to thank you page
    emptyCart();

    const { cart } = cartContext;

    const cartItemsString = cart
      .map((item) => `${item.quantity} x ${item.product.title}`)
      .join(", ");

    const response = await fetch("/api/twilio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: phone,
        body: `Thank you for your order, ${name}! Your order includes: ${cartItemsString}`,
      }),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to send SMS");
    }

    const data = await response.json();
    console.log(data);
  };

  return (
    <form className='w-full max-w-lg mx-auto bg-white rounded-xl shadow-md p-8 space-y-5'>
      <h2 className='text-center text-2xl font-semibold text-gray-800'>
        Checkout
      </h2>

      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <div className='relative mt-5'>
            <label htmlFor='name' className='text-sm font-medium text-gray-500'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Jane Smith'
            />
          </div>

          <div className='relative mt-5'>
            <label
              htmlFor='grid-date-of-birth'
              className='text-sm font-medium text-gray-500'
            >
              Date of Birth
            </label>
            <input
              id='grid-date-of-birth'
              type='date'
              className='block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>

          <div className='relative mt-5'>
            <label
              htmlFor='grid-email'
              className='text-sm font-medium text-gray-500'
            >
              Email
            </label>
            <input
              id='grid-email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              className='block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='example@gmail.com'
            />
          </div>

          <div className='relative mt-5'>
            <label
              htmlFor='grid-phone'
              className='text-sm font-medium text-gray-500'
            >
              Phone
            </label>
            <input
              id='grid-phone'
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='123-456-7890'
            />
          </div>
        </div>

        <button
          onClick={handleOrderConfirmation}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          type='button'
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
