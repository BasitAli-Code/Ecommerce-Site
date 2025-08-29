import React from 'react'
import { FaShoppingCart, FaStar } from "react-icons/fa"

const FeaturedProducts = () => {

  const images = [
    "src/assets/images/f1.jpg",
    "src/assets/images/f2.jpg",
    "src/assets/images/f3.jpg",
    "src/assets/images/f4.jpg",
    "src/assets/images/f5.jpg",
    "src/assets/images/f6.jpg",
    "src/assets/images/f7.jpg",
    "src/assets/images/f8.jpg",
  ]

  return (

    <>
      <h2 className="text-center text-5xl font-bold text-[#1a1a1a]">Featured Products</h2>
      <p className="my-4 text-center text-gray-600">Summer Collection New Modern Design</p>

      <div className="px-12 my-15 flex flex-wrap justify-evenly items-center gap-4">

    {
        
        images.map((src, index) => (

          <div key= {index} className="cursor-pointer h-[390px] p-3 w-[280px] shadow-[20px_20px_30px_rgba(0,0,0,0.04)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.08)] border border-[#cce7d0] transition-all duration-500 rounded-[5%] flex flex-col justify-between mb-8">

            <img className="rounded-lg" src={src} alt={`image pic ${index + 1}`} />

            <div className="flex flex-col justify-between">
              <span className="mt-2 text-gray-500 text-[14px]">Adidas</span>
              <p className="my-1 tracking-wider">Cartoon Astronaut T-Shirt</p>
              <div className="flex gap-1">
                <FaStar className="text-[14px] text-yellow-400" />
                <FaStar className="text-[14px] text-yellow-400" />
                <FaStar className="text-[14px] text-yellow-400" />
                <FaStar className="text-[14px] text-yellow-400" />
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[#088178] font-semibold">$78</p>
                <FaShoppingCart className="text-2xl w-8 h-8 rounded-[40%] text-[#088178] p-2 bg-[#e8f6ea]" />
              </div>

            </div>
          </div>

        ))
        
    }

      </div>

    </>
    
  )
}

export default FeaturedProducts
