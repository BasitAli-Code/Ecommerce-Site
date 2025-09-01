import React from 'react'
import { FaFacebook , FaTwitter , FaInstagram , FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="mb-5 w-full gap-3 md:gap-0 h-auto flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly md:items-start">
        
        <div className="w-full h-auto md:w-auto md:h-full text-center md:text-left">
          <img className="my-8 md:my-5 ml-[40%] md:mx-0" src="src/assets/images/logo.png" alt="Logo Image" />
          <h5 className="my-2 font-semibold">Contact</h5>
          <p className="my-1 text-gray-500">
            <span className="text-black font-semibold">Address: </span>
            562 Mall road, Street 32, Lahore
          </p>
          <p className="my-1 text-gray-500">
            <span className="text-black font-semibold">Phone: </span>
            01 2222 365 / (+92)12354687
          </p>
          <p className="my-1 text-gray-500">
            <span className="text-black font-semibold">Hours: </span>
            10:00 - 8:00, Mon to Sat
          </p>
          <h5 className="mt-3 mb-2 font-semibold">Follow Us</h5>
          <div className="flex justify-center md:justify-start gap-2">
            <FaFacebook className="text-gray-500 text-xl"/>
            <FaInstagram className="text-gray-500 text-xl"/>
            <FaTwitter className="text-gray-500 text-xl"/>
            <FaYoutube className="text-gray-500 text-xl"/>
          </div>
        </div>

        <div className="w-full h-auto md:w-auto md:h-full text-center md:text-left mt-6 md:mt-0">
          <h5 className="font-semibold mb-3">About</h5>
          <p className="mb-1 text-gray-500">About us</p>
          <p className="mb-1 text-gray-500">Delivery Information</p>
          <p className="mb-1 text-gray-500">Privacy Policy</p>
          <p className="mb-1 text-gray-500">Terms & Conditions</p>
          <p className="mb-1 text-gray-500">Contact Us</p>
        </div>

        <div className="w-full h-auto md:w-auto md:h-full text-center md:text-left mt-6 md:mt-0">
          <h5 className="font-semibold mb-3">My Account</h5>
          <p className="mb-1 text-gray-500">Sign In</p>
          <p className="mb-1 text-gray-500">View Cart</p>
          <p className="mb-1 text-gray-500">My WishList</p>
          <p className="mb-1 text-gray-500">Track My Order</p>
          <p className="mb-1 text-gray-500">Help</p>
        </div>

        <div className="w-full h-auto md:w-auto md:h-full text-center md:text-left mt-6 md:mt-0">
          <h5 className="font-semibold mb-3">Install App</h5>
          <p className="text-gray-500">From App Store or Google Play</p>
          <div className="mx-auto flex justify-center md:justify-start">
            <img className="my-3 border border-[#1a1a1a] rounded-md mr-3" src="src/assets/images/app.jpg" alt="App logo image" /> 
            <img className="my-3 border border-[#1a1a1a] rounded-md mr-3" src="src/assets/images/play.jpg" alt="PlayStore logo image" />   
          </div>
          <p className="text-gray-500">Secure Payment Gateways</p>
          <img className="my-2 mx-auto md:mx-0" src="src/assets/images/pay.png" alt="payment methods image" />
        </div>
      </div>

      <p className="my-10 text-gray-500 text-center">
        @2025 Tech Titans etc - React / Tailwind Project
      </p>
    </>
  )
}

export default Footer
