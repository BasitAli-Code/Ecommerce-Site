import React from 'react'
import { useNavigate } from 'react-router-dom'

const ActionBanner = () => {

  const navigate = useNavigate();

  return (
    <>
      
      <div className="mt-15 h-180 md:h-80 w-full flex flex-wrap justify-evenly items-center">
        <div className="mb-10 bg-cover md:h-[100%] md:w-[40%] h-[40%] w-[90%] flex justify-center gap-2 flex-col pl-10"
        style={{backgroundImage: "url('/images/b17.jpg')"}}
        >
          <p className="text-white text-xl">
            Crazy deals
          </p>
          <h4 className='text-3xl text-white font-bold'>Buy 1 Get 1 Free</h4>
           <p className="text-[16px] text-white">
            The best classic dress is on sale at cara
          </p>
          <button className="transition-all duration-300 hover:bg-[#088178] hover:text-[#fff] cursor-pointer w-35 text-[16px] px-3 py-2 rounded-sm bg-transparent border-white border-1 font-semibold text-white"
          onClick = {()=> navigate('/shop')}>
            Explore Now
          </button>
        </div>

        <div className="mb-10 bg-cover md:h-[100%] md:w-[40%] h-[40%] w-[90%] flex justify-center gap-2 flex-col pl-10"
        style={{backgroundImage: "url('/images/b10.jpg')"}}
        >
          <p className="text-white text-xl">
            Spring/Summer
          </p>
          <h4 className='text-3xl text-white font-bold'>Upcoming Season</h4>
           <p className="text-[16px] text-white">
            The best classic dress is on sale at cara
          </p>
          <button className="transition-all duration-300 hover:bg-[#088178] hover:text-[#fff] cursor-pointer w-35 text-[16px] px-3 py-2 rounded-sm bg-transparent border-white border-1 font-semibold text-white"
          onClick = {()=> navigate('/shop')}>
            Collection
          </button>
        </div>

      </div>

      <div className="my-0 md:my-10 flex flex-wrap justify-center gap-5 items-center w-full md:h-70 h-200">

        <div className="pl-7 bg-cover flex flex-col justify-center w-[90%] h-[30%] md:w-[24.5%] md:h-[80%]"
        style={{backgroundImage: "url('/images/b7.jpg')"}}
        >
          <h4 className="text-white text-3xl font-bold">
            Seasonal Sale
          </h4>
          <p className='text-red-400 text-xl font-semibold '>
            Winter Collection - 50% off
          </p>
        </div>

      <div className="pl-7 bg-cover flex flex-col justify-center w-[90%] h-[30%] md:w-[35%] md:h-[80%]"
        style={{backgroundImage: "url('/images/b4.jpg')"}}
        >
          <h4 className="text-white text-3xl font-bold">
            New FootWear Collection
          </h4>
          <p className='text-red-400 text-xl font-semibold '>
            Spring / Summer 2026
          </p>
        </div>

        <div className="pl-7 bg-cover flex flex-col justify-center w-[90%] h-[30%] md:w-[24.5%] md:h-[80%]"
        style={{backgroundImage: "url('/images/b18.jpg')"}}
        >
          <h4 className="text-white text-3xl font-bold">
            T - Shirts
          </h4>
          <p className='text-red-400 text-xl font-semibold '>
            New Trendy Prints
          </p>
        </div>

      </div>

    </>
  )
}

export default ActionBanner
