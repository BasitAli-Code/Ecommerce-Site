import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Blog from './pages/Blog.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NewsLetter from './components/NewsLetter.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      
      <Header/>
      <Routes>

        <Route path = '/' element = {<LandingPage/>} />
        <Route path = "/shop" element = {<ShopPage/>} />
        <Route path = '/blog' element = {<Blog/>} />
        <Route path = '/about' element = {<AboutPage/>} />
        <Route path = '/contactUs' element = {<ContactPage/>} />
        
      </Routes>
      <NewsLetter/>
      <Footer/>
      
      </>
  )
}

export default App
