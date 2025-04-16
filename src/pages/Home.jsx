import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Partners from '../component/Partners'
import About from '../component/About'
import Ratings from '../component/Ratings'
import CoreValues from '../component/CoreValues'
import Services from '../component/Services'
import Pricing from '../component/Pricing'
import Events from '../component/Events'
import Testimonials from '../component/Testimonials'
import Contact from '../component/Contact'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <About />
      <Ratings />
      <CoreValues />
      <Services />
      <Pricing />
      <Events />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
