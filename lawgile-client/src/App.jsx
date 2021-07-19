import React from 'react'
import './App.css'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Cart from './components/Cart'


export default function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <hr></hr>
      <Showcase></Showcase>
      <hr></hr>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  )
}
