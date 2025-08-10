import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Pricing from '../home/Pricing'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function PricingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brokerage />
      <Pricing />
      <OpenAccount />
      <Footer />
    </>
  )
}

export default PricingPage 