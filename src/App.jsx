import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import ProductSection from './components/ProductSection'
import { ProductImages , ArrivalImages } from './data/ProductsData.js'
import ActionBanner from './components/ActionBanner.jsx'

const App = () => {
  return (
    <>
    <Header/>
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

export default App
