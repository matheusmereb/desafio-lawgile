import React from 'react'
import Logo from './../assets/logo.png'

export default function Footer() {
    return(
        <div className="footer-div">
            <div>
                <a href="#" className="nav-logo"><img src={Logo} alt="icon" style={{height: 20}} /></a>
            </div>

            <div>
                <p>Copyright © 2021 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;  Matheus Mereb </p>
            </div>

            <div>
                <span class="iconify" data-icon="simple-line-icons:social-facebook" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
                <span class="iconify" data-icon="simple-line-icons:social-youtube" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
                <span class="iconify" data-icon="simple-line-icons:social-instagram" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
                <span class="iconify" data-icon="simple-line-icons:social-twitter" data-inline="false"></span>&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    )
}