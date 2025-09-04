import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div
        className="my-15 md:my-0 md:mb-25 w-full h-60 md:h-50 bg-no-repeat flex flex-wrap justify-evenly items-center bg-[#041e42]"
        style={{ backgroundImage: "url('/images/b14.png')" }}
      >
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-start">
          <h3 className="mb-2 text-white text-2xl md:text-3xl font-semibold tracking-wide">
            Sign Up for NewsLetters
          </h3>
          <p className="md:text-start text-center text-[15px] text-[#818ea0]">
            Get E-mail updates about our latest shop and
            <span className="text-yellow-400"> special offers</span>
          </p>
        </div>

        <div className="w-full md:w-[40%] flex justify-center">
          <input
            name="userEmail"
            className="w-[60%] rounded-l-md bg-white text-[14px] px-5 py-3 tracking-wider outline-0"
            type="text"
            placeholder="Your email address"
          />
          <button className="cursor-pointer rounded-r-md text-[14px] px-5 py-3 text-white bg-[#088178]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
