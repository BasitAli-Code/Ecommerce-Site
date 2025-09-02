import React, { useState } from 'react'
import TopImage from '../components/TopImage'
import Features from '../components/Features'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const AboutPage = () => {
    
  const appImages = [
    "src/assets/images/a1.png",
    "src/assets/images/a2.jpg",
    "src/assets/images/a3.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  function previous() {
    setCurrentIndex((prev) => (prev - 1 + appImages.length) % appImages.length);
  }

  function next() {
    setCurrentIndex((prev) => (prev + 1) % appImages.length);
  }

  return (
    <>
      <TopImage
        imageSrc="src/assets/images/banner.png"
        mainHeading="#KnowUs"
        subText="Learn and read more about us"
      />

      <div className="my-15 flex w-full h-auto justify-center items-center flex-col md:flex-row gap-8">
        <img
          className="w-[90%] md:w-[35%] h-[330px] rounded-lg"
          src="src/assets/images/a6.jpg"
          alt="About us image"
        />
        <div className="w-[90%] md:w-[30%]">
          <h2 className="tracking-wide text-3xl md:text-4xl text-center md:text-start text-black font-semibold">
            Who We Are ?
          </h2>
          <p className="text-center md:text-start my-4 text-gray-500 text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum quas quibusdam suscipit. Aperiam eveniet, quas non voluptate quasi doloribus vero culpa et, a neque officiis omnis, reprehenderit doloremque ex!
            Fugit veritatis, itaque sint nobis ad molestias nihil hic odio quasi illum sapiente, explicabo.
          </p>
        </div>
      </div>

      <div className="my-10 flex flex-col justify-center h-auto w-full items-center">
        <h2 className="mb-10 text-black font-semibold md:text-4xl text-3xl tracking-wide">
          Download Our <span className="text-red-400">App</span>
        </h2>

        <div
          className="px-2 object-cover w-[90%] justify-between md:w-[40%] h-[450px] rounded-lg shadow-lg flex items-center"
          style={{ backgroundImage: `url(${appImages[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <button onClick={previous}>
            <FaArrowLeft className="text-3xl text-red-400 cursor-pointer font-bold" />
          </button>

          <button onClick={next}>
            <FaArrowRight className="text-3xl text-red-400 cursor-pointer font-bold" />
          </button>
        </div>
      </div>

      <Features />
    </>
  )
}

export default AboutPage
