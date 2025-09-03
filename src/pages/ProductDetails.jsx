import React, { useState } from 'react'
import TopImage from '../components/TopImage'
import { useParams } from 'react-router-dom';
import { ProductImages , ArrivalImages } from '../data/ProductsData';

const ProductDetails = () => {

  const [size , setSize] = useState("");
  const { id } = useParams();

  let product = ProductImages.find((p)=> p.id === Number(id));
  if (!product) {
    product = ArrivalImages.find((p)=> p.id === Number(id));
  }

  if (!product) {
    return (
      <div className="text-center my-30">
        <h2 className="text-3xl font-semibold text-red-500">Product not found</h2>
      </div>
    );
  }

  return (
    <>
      <TopImage 
        imageSrc='/images/b1.jpg' 
        mainHeading="#stayhome"
        subText="Save more with coupons & 70% off!" 
      /> 

      <div className="my-20 flex flex-col md:flex-row justify-center md:items-start items-center w-full h-auto gap-8 px-4 md:px-12">

        <img 
          className='w-[85%] md:w-[25%] h-[400px] rounded-lg'
          src={product.src} 
          alt={product.name} 
        />

        <div className="flex flex-col w-[90%] md:w-[40%] items-start text-left gap-4">
          <p className='text-[14px] text-gray-600'>
            Home / {product.name}
          </p>

          <h3 className='text-2xl md:text-3xl text-black font-semibold'>
            {product.name}
          </h3>

          <p className='text-2xl md:text-3xl text-black font-semibold'>
            ${product.price}
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              aria-label="Select product size"
              className="outline-none w-35 px-3 py-2 border border-gray-400 rounded-md"
            >
              <option value="" disabled>
                Select Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl-large">XL-Large</option>
            </select>

            <button className="transition-all duration-300 bg-[#088178] text-white cursor-pointer rounded-md shadow-md px-6 py-2 hover:bg-[#0a9c91] hover:shadow-lg">
              Add to Cart
            </button>
          </div>

          <input 
            type="number" 
            name="product-quantity" 
            className="outline-none w-24 border border-gray-400 rounded-md py-1 px-2 mt-3"
            min="1"
            max="100" 
            defaultValue="1"
          />

          <h3 className='text-2xl text-black font-semibold mt-6'>
            Product Details
          </h3>
          <p className='text-gray-600 text-[16px] leading-relaxed'>
            Crafted with quality materials and a modern design, this product offers lasting comfort, durability, and everyday style. Perfect for daily wear or special occasions, it is designed to match your lifestyle with ease.
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
