const CartPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Cart items will be dynamically generated here */}
            {/* Example item */}
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap">
                <img
                  src={image}
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">{title}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{price}</td>
              <td className="px-6 py-4 whitespace-no-wrap">
                {cartItem.quantity}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">
                <div className="flex items-center gap-4">
                  <button
                    className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    <FaMinus />
                  </button>
                  <div>{cartItem.quantity}</div>

                  <button
                    className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    {" "}
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap">$10.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        {/* Cart summary details */}
        <p className="text-lg font-semibold">Summary</p>
        <div className="mt-4 flex justify-between">
          <p>Subtotal:</p>
          <p>$10.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>$5.00</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold">$15.00</p>
        </div>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
