import React from 'react';

const Card = (props) => {
    return ( 
        <>
            <div className="card">
                <img className="card-img-top" src={props.Color} style={{width: '8rem'}}/>
                <div className="card-body">
                    <h6 className="card-title">Post-it {props.Name}</h6>
                    <p className="card-text">Bloco Post-It R-330 refil 100fls.</p>
                    <p className="card-text">1cx&nbsp; - &nbsp;<b style={{fontSize: 14}}>R${props.Value}</b>&nbsp;&nbsp;&nbsp;<span style={{color: 'red', fontWeight: 'bold'}}>20% OFF</span></p>
                </div>
            </div>
        </>
     );
}
 
export default Card;

