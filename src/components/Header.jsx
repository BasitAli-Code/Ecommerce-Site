import React from 'react'
import { useState } from 'react'
import { FaShoppingCart , FaBars , FaTimes } from "react-icons/fa" 

const Header = () => {

    const [ isMenuSelected , setIsMenuSelected ] = useState('False');

    function changeMenuState(){
        setIsMenuSelected(!isMenuSelected);
    }

  return (

  <>

    <div className='bg-[#E3E6F3] drop-shadow-lg px-18 flex justify-between items-center w-full h-20 fixed top-0 left-0 z-50'>

      <div className="">
        <img src="src\assets\images\logo.png" alt="logo image" />  
      </div>

      <div className="hidden md:flex">
        <a className="text-2xl ml-14 text-[#1a1a1a] hover:text-[#088178]" href="#">Home</a>
        <a className="text-2xl ml-14 text-[#1a1a1a] hover:text-[#088178]" href="#">Shop</a>
        <a className="text-2xl ml-14 text-[#1a1a1a] hover:text-[#088178]" href="#">Blog</a>
        <a className="text-2xl ml-14 text-[#1a1a1a] hover:text-[#088178]" href="#">About</a>
        <a className="text-2xl ml-14 text-[#1a1a1a] hover:text-[#088178]" href="#">Content</a>
        <FaShoppingCart className='text-3xl ml-14 mt-2 mr-6' />
      </div>

      <div onClick = { changeMenuState } className='block md:hidden'>
        { isMenuSelected ? <FaTimes className='text-3xl text-[rgba(0,0,0,0.8)]'/> : <FaBars className='text-3xl text-[rgba(0,0,0,0.8)]'/> }
      </div>

      
    </div>

    { isMenuSelected && 
      
      <div className = " md:hidden absolute right-0 top-20 flex flex-col items-center justify-between py-10 bg-[#E3E6F3] h-[450px] w-[60vw] rounded-xl shadow-lg transition-all ease-in-out duration-500 " >

        <a className="text-2xl text-[#1a1a1a] hover:text-[#088178]" href="#">Home</a>
        <a className="text-2xl mt-10 text-[#1a1a1a] hover:text-[#088178]" href="#">Shop</a>
        <a className="text-2xl mt-10 text-[#1a1a1a] hover:text-[#088178]" href="#">Blog</a>
        <a className="text-2xl mt-10 text-[#1a1a1a] hover:text-[#088178]" href="#">About</a>
        <a className="text-2xl mt-10 text-[#1a1a1a] hover:text-[#088178]" href="#">Content</a>
          
      </div>

      }

  </>

  )
}

export default Header
