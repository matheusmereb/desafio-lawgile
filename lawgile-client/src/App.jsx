import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routes from './Routes'


export default function App() {

  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>  
  )
}