import { useState } from 'react'

import './App.css'
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import WhyUCal from './components/WhyUCal/WhyUCal.jsx'
import Services from './components/Services/Services.jsx'
import Capabilities from './components/Capabilities/Capabilities.jsx'
import AfterMarket from './components/AfterMarket/AfterMarket.jsx'
import TrustedPartners from './components/TrustedPartners/TrustedPartners.jsx'
import GlobalPresence from './components/GlobalPresence/GlobalPresence.jsx'
import Faq from './components/Faq/Faq.jsx'
import News from './components/News/News.jsx'
import Footer from './components/Footer/Footer.jsx'
import Products from './components/Products/Products.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection/>
    <WhyUCal/>
    <Products/>
    <Services/>
    <Capabilities/>
    <AfterMarket/>
    <TrustedPartners/>
    <GlobalPresence/>
    <Faq/>
    <News/>
    <Footer/>
      </>
  )
}

export default App
