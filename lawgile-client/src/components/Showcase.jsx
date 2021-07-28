import React from 'react';
import Card from '../components/Card'

const Showcase = () => {
    return ( 
        <>
            <div className="section" id="showcase">
                <div className="showcase">
                    <h2 className="s-title">PRODUTOS</h2>
                    <br></br>
                    <div className="s-products">
                        <Card Name="Verde"
                        Color="https://s3.amazonaws.com/lepok.w/produtos/produtos/prod/16814.jpg"
                        Value="46,90"></Card>

                        <Card Name="Rosa"
                        Color="https://s3.amazonaws.com/lepok.w/produtos/produtos/prod/01904.jpg"
                        Value="49,90"></Card>

                        <Card Name="Laranja"
                        Color="https://s3.amazonaws.com/lepok.w/produtos/produtos/prod/17159.jpg"
                        Value="48,90"></Card>

                        <Card Name="Azul"
                        Color="https://images.tcdn.com.br/img/img_prod/721137/bloco_adesivo_76x76_90_fls_azul_post_it_3m_1719_1_20201214004129.png"
                        Value="49,90"></Card>

                        <Card Name="Amarelo"
                        Color="https://s3.amazonaws.com/lepok.w/produtos/produtos/prod/00589.jpg"
                        Value="47,90"></Card>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Showcase;