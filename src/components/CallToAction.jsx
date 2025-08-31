import React from 'react'

const CallToAction = () => {
  return (
    <>
      
      <div className='mt-7 mb-25 w-full bg-cover h-85 bg-[center_top_-20px] flex flex-col items-center justify-center gap-6' 
      style={{backgroundImage: "url('src/assets/images/b2.jpg')"}} >

        <p className=" text-white font-semibold text-xl">
            Repair Services
        </p>
        <h3 className = "text-white font-semibold md:text-3xl text-2xl text-center" >
            Up to <span className='text-[#ef3636]'>70% off </span>- All t-Shirts & Accessories
        </h3>
        <button className="transition-all duration-300 hover:bg-[#088178] hover:text-[#fff] cursor-pointer rounded-md shadow-lg px-6 py-3 bg-white text-black">
            Explore Now
        </button>

      </div>

    </>
  )
}

export default CallToAction
