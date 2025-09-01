import React from 'react'
import { useState } from 'react'
import { FaShoppingCart , FaBars , FaTimes } from "react-icons/fa" 
import { Link } from 'react-router-dom'

const Header = () => {

    const [ isMenuSelected , setIsMenuSelected ] = useState('True');

    function changeMenuState(){
        setIsMenuSelected(!isMenuSelected);
    }

  return (

  <>

    <div className='bg-[#E3E6F3] drop-shadow-lg px-6 md:px-18 flex justify-between items-center w-full h-20 fixed top-0 left-0 z-50'>

      <div className="">
        <img src="src\assets\images\logo.png" alt="logo image" />  
      </div>

      <div className="hidden md:flex">
        <Link to="/" className="text-2xl ml-14 transition-all duration-500 text-[#1a1a1a] hover:text-[#088178]">Home</Link>
        <Link to="/shop" className="text-2xl ml-14 transition-all duration-500 text-[#1a1a1a] hover:text-[#088178]">Shop</Link>
        <Link to="/blog" className="text-2xl ml-14 transition-all duration-500 text-[#1a1a1a] hover:text-[#088178]">Blog</Link>
        <Link to="/about" className="text-2xl ml-14 transition-all duration-500 text-[#1a1a1a] hover:text-[#088178]">About</Link>
        <Link to="/content" className="text-2xl ml-14 transition-all duration-500 text-[#1a1a1a] hover:text-[#088178]">Content</Link>
        <FaShoppingCart className="transition-all duration-500 text-[#1a1a1a] hover:text-[#088178] cursor-pointer text-3xl ml-14 mr-6" />
      </div>

      <div onClick = { changeMenuState } className='block md:hidden'>
        { isMenuSelected ? <FaBars className='text-3xl text-[rgba(0,0,0,0.8)]'/> : <FaTimes className='text-3xl text-[rgba(0,0,0,0.8)]'/> }
      </div>

      
    </div>

    { !isMenuSelected && 
      
      <div className = "fixed md:hidden right-0 top-20 flex flex-col items-center justify-between py-10 bg-[#E3E6F3] h-[450px] w-[60vw] rounded-xl shadow-lg transition-all ease-in-out duration-500 z-40" >

        <a className="text-2xl text-[#1a1a1a] hover:text-[#088178]" href="#">Home</a>
        <a className="text-2xl mt-8 text-[#1a1a1a] hover:text-[#088178]" href="#">Shop</a>
        <a className="text-2xl mt-8 text-[#1a1a1a] hover:text-[#088178]" href="#">Blog</a>
        <a className="text-2xl mt-8 text-[#1a1a1a] hover:text-[#088178]" href="#">Cart</a>
        <a className="text-2xl mt-8 text-[#1a1a1a] hover:text-[#088178]" href="#">About</a>
        <a className="text-2xl mt-8 text-[#1a1a1a] hover:text-[#088178]" href="#">Content</a>
          
      </div>

      }

  </>

  )
}

export default Header
