import React from 'react'
import Hero from './Hero'
import Awwards from './Awwards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
import Navbar from '../Navbar'

function HomePage() {
  return (
    <>
    <Navbar />
      <Hero />
      <Awwards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default HomePage