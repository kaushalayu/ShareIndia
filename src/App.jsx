import { useState, Suspense, lazy, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import { Routes, Route, useLocation } from 'react-router-dom'

// Lazy loading pages
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Gallery = lazy(() => import('./Pages/Gallery'))
const Offer = lazy(() => import('./Pages/Offer'))
const Tour = lazy(() => import('./Pages/Tour'))
const BlogGrid = lazy(() => import('./Pages/BlogGrid'))
const Contact = lazy(() => import('./Pages/Contact'))
const Faq = lazy(() => import('./Pages/Faq'))
const BlogDetails = lazy(() => import('./Pages/BlogDetails'))
const OfferDetail = lazy(() => import('./Pages/OfferDetail'))
const TourDetail = lazy(() => import('./Pages/TourDetail'))
const DestinationDetails = lazy(() => import('./Pages/DestinationDetails'))
const Legal = lazy(() => import('./Pages/Legal'))
const Signup = lazy(() => import('./Pages/Signup'))
const Team = lazy(() => import('./Pages/Team'))
const TeamDetail = lazy(() => import('./Pages/TeamDetail'))

function App() {
  const location = useLocation();

  useEffect(() => {
    // Re-initialize legacy scripts whenever the route changes
    // A timeout is used to allow React to render the new page content first
    const timer = setTimeout(() => {
      if (typeof window.shareIndiaInit === 'function') {
        window.shareIndiaInit();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
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
          <Route path='/destination-detail' element={<DestinationDetails />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/our-team' element={<Team />} />
          <Route path='/our-team-detail' element={<TeamDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
