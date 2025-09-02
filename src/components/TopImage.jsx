import React from 'react'

const TopImage = ({ imageSrc , mainHeading , subText }) => {
  return (
    <>
      
         <div className="w-full my-20 bg-cover gap-3 flex flex-col justify-center items-center h-80"
        style={{ backgroundImage: `url(${imageSrc})`}}>
            <h1 className="tracking-wider text-white text-4xl md:text-5xl font-bold">
                {mainHeading}
            </h1>
            <p className='tracking-wide text-white'>
                {subText}
            </p>
        </div>


    </>
  )
}

export default TopImage
