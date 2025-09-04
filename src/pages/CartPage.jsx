import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { CartContext } from "../CartContext";
import TopImage from "../components/TopImage";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const shippingCost = Math.floor(Math.random() * 21) + 10;

  const navigate = useNavigate();

  function handleOrderConfirmation() {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before confirming");
      return;
    }
    navigate("/order-confirmation");
  }

  return (
    <>
      <TopImage
        imageSrc="/images/banner.png"
        mainHeading="#cart"
        subText="Apply a coupon & save upto 70%"
      />

      <div className="w-full h-auto flex flex-col justify-center items-center overflow-x-auto">
        {/* Inner container with fixed minimum width for scrolling */}
        <div className="min-w-[1000px] md:w-[90%]">
          {/* Header Row */}
          <div className="mt-15 mb-5 pl-75 md:pl-0 grid grid-cols-6 items-center border border-gray-300 rounded-md px-4 py-3 text-center">
            <p className="text-black font-[500] text-[18px]">Remove</p>
            <p className="text-black font-[500] text-[18px]">Image</p>
            <p className="text-black font-[500] text-[18px]">Product</p>
            <p className="text-black font-[500] text-[18px]">Price</p>
            <p className="text-black font-[500] text-[18px]">Quantity</p>
            <p className="text-black font-[500] text-[18px]">Sub Total</p>
          </div>

          {/* Product Rows */}
          <div className="mb-15">
            {cart.map((product, index) => (
              <div
                key={product.id || index}
                className="border border-gray-300 grid grid-cols-6 items-center px-4 py-3 text-center rounded-md mb-2 pl-75 md:pl-0"
              >
                <button onClick={() => removeFromCart(product)}>
                  <FaTimes className="text-gray-500 text-xl cursor-pointer hover:text-black mx-auto" />
                </button>

                <img
                  className="h-30 mx-auto"
                  src={product.src}
                  alt="product-image"
                />

                <p className="text-gray-500">{product.name}</p>

                <p className="text-gray-500">${product.price}</p>

                <div className="flex items-center justify-center gap-3">
                  <button onClick={() => decreaseQuantity(product)}>
                    <FaMinus className="text-gray-500 text-xl cursor-pointer hover:text-black" />
                  </button>
                  <span className="text-gray-700 font-[500]">
                    {product.quantity}
                  </span>
                  <button onClick={() => increaseQuantity(product)}>
                    <FaPlus className="text-gray-500 text-xl cursor-pointer hover:text-black" />
                  </button>
                </div>

                <p className="text-gray-500">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ml-4 md:ml-20 border border-gray-400 my-15 px-4 rounded-lg py-4 md:w-[30%] h-auto w-[90%] flex flex-col">
        <h3 className="text-2xl mb-4 text-black font-[600]">Cart Totals</h3>
        <div className="flex gap-1 mb-2">
          <div className="rounded-md text-gray-600 w-[50%]  px-3 py-1 border border-gray-400">
            Cart SubTotal
          </div>
          <div className="rounded-md text-gray-600 w-[50%]  px-3 py-1 border border-gray-400">
            ${totalPrice.toFixed(2)}
          </div>
        </div>
        <div className="flex gap-1 mb-2">
          <div className="rounded-md text-gray-600 w-[50%] px-3 py-1 border border-gray-400">
            Shipping
          </div>
          <div className="rounded-md text-gray-600 w-[50%] px-3 py-1 border border-gray-400">
            ${totalPrice === 0 ? 0 : shippingCost}
          </div>
        </div>
        <div className="flex gap-1 mb-2">
          <div className="rounded-md text-gray-600 w-[50%] px-3 py-1 border border-gray-400">
            Cart Total
          </div>
          <div className="rounded-md text-gray-600 w-[50%] px-3 py-1 border border-gray-400">
            ${totalPrice === 0 ? 0 : (totalPrice + shippingCost).toFixed(2)}
          </div>
        </div>

        <button
          className="transition-all my-1 md:w-[40%] w-[70%] duration-300 bg-[#088178] text-[#fff] cursor-pointer rounded-md shadow-lg px-6 py-3"
          onClick={handleOrderConfirmation}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
};

export default CartPage;
