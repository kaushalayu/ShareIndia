import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import ScrollToTop from './Components/ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Offer from './Pages/Offer'
import Tour from './Pages/Tour'
import BlogGrid from './Pages/BlogGrid'
import Contact from './Pages/Contact'
import Faq from './Pages/Faq'
import BlogDetails from './Pages/BlogDetails'
import OfferDetail from './Pages/OfferDetail'
import TourDetail from './Pages/TourDetail'

function App() {


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/blog-grid' element={<BlogGrid />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/blog-detail' element={<BlogDetails />} />
        <Route path='/offer-detail' element={<OfferDetail />} />
        <Route path='/tour-detail' element={<TourDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
