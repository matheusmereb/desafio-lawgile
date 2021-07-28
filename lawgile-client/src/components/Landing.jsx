import React from 'react';
import Test from './../assets/test.mp4';
import Sale from './../assets/sale.png'
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function Landing(){

    return(
        <div className="l-div section" id="landing">
            <video
                className="l-video"
                autoPlay
                muted
                loop>
                <source src={Test} type="video/mp4"/>
            </video>
            <div className="l-info">
                <figure><img src={Sale} className="slide-in-blurred-top"/></figure>
                <div className="l-text" >
                    <h1 className="l-title">ATÉ 50% OFF NA BLACK FRIDAY</h1>
                    <h4 className="l-body">Nessa Black Friday temos descontos de até 50% em pedidos acima de 10 caixas de Post-its variados</h4>
                    <LinkContainer to="/showcase">
                        <Nav.Link className="form-link"><button className="l-btn l-btn-2">QUERO SABER MAIS</button></Nav.Link>
                    </LinkContainer>
                </div>
            </div>
        </div>
    )
}