import React from 'react'
import Hero from 'src/components/Hero.jsx'
import Features from 'src/components/Features'
import ProductSection from 'src/components/ProductSection'
import { ProductImages , ArrivalImages } from 'src/data/ProductsData.js'
import CallToAction from 'src/components/CallToAction'
import ActionBanner from 'src/components/ActionBanner.jsx'

const Home = () => {
  return (
    <>
        <Hero/>
        <Features/>
        <ProductSection titleFirst="Featured" titleSecond= "Products"
        images={ProductImages} /> 
        <CallToAction/>
        <ProductSection titleFirst="New" titleSecond= "Arrivals"
        images={ArrivalImages} />
        <ActionBanner/>
    </>
  )
}

export default Home
