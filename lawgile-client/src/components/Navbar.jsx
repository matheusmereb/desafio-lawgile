import React from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Logo from './../assets/logo.png'
import { LinkContainer } from "react-router-bootstrap";

export default function Navbar() {
    return(
        <div className="navbar-div">
            <Nav activeKey={window.location.pathname}>
                <LinkContainer to="/">
                    <Nav.Link className="nav-link">HOME</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/showcase">
                    <Nav.Link className="nav-link">PRODUTOS</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Nav.Link className="nav-link">PEÇA JÁ</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/pedidos">
                    <Nav.Link className="nav-link">HISTÓRICO</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/" style={{padding: 0}}>
                    <Nav.Link className="nav-logo"><img src={Logo} alt="icon" style={{height: 40}} /></Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

        
/* 
<Nav.Link href="/" className="nav-link">HOME</Nav.Link>
<Nav.Link href="/showcase" className="nav-link">PRODUTOS</Nav.Link>
<Nav.Link href="/cart" className="nav-link">PEÇA JÁ</Nav.Link>
<Nav.Link href="/pedidos" className="nav-link">PEDIDOS</Nav.Link>
<Nav.Link href="/" className="nav-logo"><img src={Logo} alt="icon" style={{height: 40}} /></Nav.Link> */