import React, { useState } from 'react'
import ProductSection from '../components/ProductSection.jsx'
import TopImage from '../components/TopImage.jsx'
import { ProductImages , ArrivalImages  } from '../data/ProductsData.js'

const ShopPage = () => {

    const [currentImages , setCurrentImages] = useState([...ProductImages]);
    const [isActive , setIsActive] = useState("1");

  return (
    <>

        <TopImage imageSrc = '/images/b1.jpg' mainHeading = "#stayhome"
        subText = "Save more with coupons & 70% off!" /> 

        <ProductSection isTitlePresent = {false} titleFirst = "Tech"
        titleSecond = "Titans" images = {currentImages} />

        <div className="flex mb-10 items-center justify-center gap-3 w-full h-auto">

            <button onClick = { ()=> {
                setIsActive("1");
                setCurrentImages([...ProductImages]);
            } } 
            className={ `transition-all duration-300 cursor-pointer rounded-md shadow-lg px-7 py-4 md:px-6 md:py-3 text-xl hover:bg-[#088178] hover:text-[#fff] ${ isActive == "1" ? "bg-[#088178] text-white" : "bg-white text-black" } ` }>
                1
            </button>

            <button onClick = { ()=> {
                setIsActive("2");
                setCurrentImages([...ArrivalImages]);
            } } 
            className={ `transition-all duration-300 cursor-pointer rounded-md shadow-lg px-7 py-4 md:px-6 md:py-3 text-xl hover:bg-[#088178] hover:text-[#fff] ${ isActive == "2" ? "bg-[#088178] text-white" : "bg-white text-black" } ` }>
                2
            </button>

        </div>

    </>
  )
}

export default ShopPage
