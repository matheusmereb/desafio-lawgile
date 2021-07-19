import React from 'react'
import Logo from './../assets/logo.png'

export default function Navbar() {
    return(
        <div className="navbar-div">
            <a data-scroll href="#landing" className="nav-link">HOME</a>
            <a data-scroll href="#showcase" className="nav-link">PRODUTOS</a>
            <a data-scroll href="#cart" className="nav-link">PEÇA JÁ</a>
            <a data-scroll href="#" className="nav-logo"><img src={Logo} alt="icon" style={{height: 40}} /></a>
        </div>
    )
}