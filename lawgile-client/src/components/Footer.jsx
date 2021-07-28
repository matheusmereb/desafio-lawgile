import React from 'react'
import Nav from 'react-bootstrap/esm/Nav'
import Logo from './../assets/logo.png'
import { LinkContainer } from "react-router-bootstrap";

export default function Footer() {
    return(
        <div className="footer-div">
            <Nav>
                <LinkContainer to="/" style={{padding: 0}}>
                    <Nav.Link className="nav-logo"><img src={Logo} alt="icon" style={{height: 20, padding: 0}} /></Nav.Link>
                </LinkContainer>
            </Nav>

            <div>
                <p>Copyright © 2021 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;  Matheus Mereb </p>
            </div>

            <div>
                <span className="iconify" data-icon="simple-line-icons:social-facebook" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
                <span className="iconify" data-icon="simple-line-icons:social-youtube" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
                <span className="iconify" data-icon="simple-line-icons:social-instagram" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
                <span className="iconify" data-icon="simple-line-icons:social-twitter" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}