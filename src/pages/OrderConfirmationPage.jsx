import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#088178] p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <AiOutlineCheckCircle className="mx-auto text-[#088178]" size={64} />
        
        <h1 className="text-2xl font-bold mt-4 text-gray-800">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your order has been placed successfully
          and is being processed.
        </p>

        <div className="mt-6 space-y-3">
          <Link
            to="/shop"
            className="block w-full bg-[#088178] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="block w-full border border-[#088178] text-[#088178] py-3 rounded-xl font-medium hover:bg-[#088178] hover:text-white transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
