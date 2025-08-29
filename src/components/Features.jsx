import React from 'react'

const Features = () => {
  return (
    <>
      
      <div className="my-20 flex flex-wrap justify-evenly items-center">

        <div className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg">
            <img src="src\assets\images\f1.png" alt="Feature image 1" />
            <button className='rounded w-[70%] text-[#088178] bg-[#fddde4]'>Free Shipping</button>
        </div>
        
        <div className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg">
            <img src="src\assets\images\f2.png" alt="Feature image 2" />
            <button className='rounded w-[70%] text-[#088178] bg-[#cdebbc]'>Online Order</button>
        </div>
        
        <div className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg">
            <img src="src\assets\images\f3.png" alt="Feature image 3" />
            <button className='rounded w-[70%] text-[#088178] bg-[#d1e8f2]'>Save Money</button>
        </div>
        
        <div className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg">
            <img src="src\assets\images\f4.png" alt="Feature image 4" />
            <button className='rounded w-[70%] text-[#088178] bg-[#cdd4f8]'>Promotions</button>
        </div>
        
        <div className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg">
            <img src="src\assets\images\f5.png" alt="Feature image 5" />
            <button className='rounded w-[70%] text-[#088178] bg-[#f6dbf6]'>Happy Sell</button>
        </div>
        
        <div className="mb-5 border-1 border-[#cce7d0] rounded-lg h-45 w-40 flex justify-evenly items-center flex-col shadow-lg">
            <img src="src\assets\images\f6.png" alt="Feature image 6" />
            <button className='rounded w-[70%] text-[#088178] bg-[#fff2e5]'>F24/7 Support</button>
        </div>

      </div>

    </>
  )
}



export default Features