import React, { useState } from 'react'
import ProductSection from '../components/ProductSection.jsx'
import { ProductImages , ArrivalImages  } from '../data/ProductsData.js'

const ShopPage = () => {

    const [currentImages , setCurrentImages] = useState([...ProductImages]);
    const [isActive , setIsActive] = useState("1");

  return (
    <>

        <div className="w-full my-20 bg-cover gap-3 flex flex-col justify-center items-center h-80"
        style={{ backgroundImage:"url('src/assets/images/b1.jpg')"}}>
            <h1 className="tracking-wider text-white text-4xl font-bold">
                #stayhome
            </h1>
            <p className='tracking-wide text-white'>
                Save more with coupons & 70% off!
            </p>
        </div>

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
