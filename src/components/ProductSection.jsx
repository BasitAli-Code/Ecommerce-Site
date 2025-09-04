import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductSection = ({
  isTitlePresent,
  titleFirst,
  titleSecond,
  images,
}) => {
  return (
    <>
      {isTitlePresent && (
        <>
          <h2 className="text-center text-5xl font-bold text-[#1a1a1a]">
            {titleFirst}
            <span className="text-red-400"> {titleSecond}</span>
          </h2>
          <p className="my-4 text-center text-gray-600">
            Summer Collection New Modern Design
          </p>
        </>
      )}
      <div className="px-12 my-15 flex flex-wrap justify-evenly items-center gap-4">
        {images.map((element, index) => (
          <Link
            key={element.id}
            to={`/product-details/${element.id}`}
            className="block"
          >
            <div className="cursor-pointer h-[390px] p-3 w-[280px] shadow-[20px_20px_30px_rgba(0,0,0,0.04)] hover:shadow-[20px_20px_30px_rgba(0,0,0,0.09)] border border-[#cce7d0] transition-all duration-500 rounded-[5%] flex flex-col justify-between mb-7 hover:transform hover:scale-103">
              <img
                className="rounded-lg"
                src={element.src}
                alt={`image pic ${index + 1}`}
                loading="lazy"
              />

              <div className="flex flex-col justify-between">
                <span className="mt-2 text-gray-500 text-[14px]">Adidas</span>
                <p className="transition-all duration-200 hover:text-[#088178] my-1 tracking-wider">
                  {element.name}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: element.rating }).map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-[14px] text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#088178] font-semibold">
                    ${element.price}
                  </p>
                  <FaShoppingCart className="text-2xl w-8 h-8 rounded-[40%] text-[#088178] p-2 bg-[#e8f6ea] hover:bg-[#088178] hover:text-[#e8f6ea] transition-all duration-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductSection;
