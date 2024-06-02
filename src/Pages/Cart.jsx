import React from "react";
import { useSelector } from "react-redux";
import CardItemCard from "../Components/CardItemCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2);
  };

  const cartItems = cart.map((cartItem) => (
    <CardItemCard
      key={Math.random()}
      id={cartItem.id}
      title={cartItem.title}
      price={cartItem.price}
      image={cartItem.category.image}
      quantity={cartItem.quantity}
    />
  ));

  return (
    <>
      <div className=" ">
        <div className="font-bold mb-6 text-xl">Your shopping cart</div>
        <div className="flex flex-col gap-8 w-full overflow-auto">
          <table className="">
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
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>{cartItems}</tbody>
          </table>
        </div>
        <h2 className="font-bold text-center text-2xl">Total: ${sumTotal()}</h2>
        <div className="flex justify-center my-8">
        <button className="p-4 font-bold w-fit rounded-full bg-[#46FFD3] hover:bg-[#35eec2]">
          Checkout
        </button></div>
      </div>
    </>
  );
};

export default Cart;
