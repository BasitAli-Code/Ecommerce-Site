import React from 'react'

const Hero = () => {
  return (

<>

 <div 
  className="overflow-hidden h-[100vh] w-full bg-cover bg-[center_top_25px]"
  style={{ backgroundImage: "url('src/assets/images/hero4.png')" }}>

    <h3 className='text-gray-700 text-2xl md:text-3xl absolute top-70 left-5 md:top-90 md:left-30 font-semibold'>Trade-in-offer</h3>
    <h1 className='text-black text-4xl md:text-6xl absolute top-80 left-5 md:top-105 md:left-30 font-bold tracking-wider'>
      Super value deals <br/>
      <span className='text-[#088178]'> On all products </span>
    </h1>

    <p className='text-gray-500 text-xl font-semibold absolute top-105 left-5 md:top-140 md:left-30'>Save more with coupons & 70% off</p>

    <button className="cursor-pointer w-60 h-12.5 font-bold text-[#088178] text-xl absolute top-120 left-10 md:top-157 md:left-42" 
    style ={{ backgroundImage: "url('src/assets/images/button.png')"}}>
      Shop Now
    </button>

</div>

</>

  )
}

export default Hero
