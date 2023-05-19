const CheckoutForm: React.FC = () => {
  // ... Checkout form functionality

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="relative w-full px-3 mb-6 md:mb-0">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Jane Smith"
          />
          <div className="relative mt-5">
            <label
              htmlFor="grid-date-of-birth"
              className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-900"
            >
              Date of Birth
            </label>
            <input
              id="grid-date-of-birth"
              type="date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Doe"
            />
          </div>

          <div className="relative mt-5">
            <label
              htmlFor="grid-email"
              className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <input
              id="grid-email"
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative mt-5">
            <label
              htmlFor="grid-phone"
              className="absolute -top-2 left-2 inline-block px-1 text-xs font-medium text-gray-900"
            >
              Phone
            </label>
            <input
              id="grid-phone"
              type="tel"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="123-456-7890"
            />
          </div>
        </div>

        <button
          onClick={() => console.log("Confirm order")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
