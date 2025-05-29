import React from 'react'
import CompanyDetails from './Components/CompanyDetails'
import CServices from './Components/CServices'
import Reason from './Components/Reason'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import './App.css'
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CServices />
      <Reason />
      <CompanyDetails />
    </div>
  )
}

export default App
