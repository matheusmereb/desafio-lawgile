import React from 'react';
import Test1 from './../assets/test1.mp4';
import Form from './Form';
import Sale from './../assets/sale.png'

export default function Landing(){

    return(
        <div className="l-div" id="landing">
            <video
                className="l-video"
                autoPlay
                muted
                loop>
                <source src={Test1} type="video/mp4"/>
            </video>
            <div className="l-info">
                <figure><img src={Sale} class="slide-in-blurred-top"/></figure>
                <div className="l-text" >
                    <h1 className="l-title">ATÉ 50% OFF NA BLACK FRIDAY</h1>
                    <h4 className="l-body">Nessa Black Friday temos descontos de até 50% em pedidos acima de 10 caixas de Post-its variados</h4>
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}