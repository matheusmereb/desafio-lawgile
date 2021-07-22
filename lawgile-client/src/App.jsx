import React from 'react'
import './App.css'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Carrinho from './components/Carrinho'


export default function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <hr></hr>
      <Showcase></Showcase>
      <hr></hr>
      <div className="container-2">
        <Carrinho></Carrinho>
        <Footer></Footer>
      </div>
    </div>
  )
}
