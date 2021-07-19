import React from 'react';

const Card = (props) => {
    return ( 
        <>
            <div className="card">
                <img className="card-img-top" src={props.Color} style={{width: '8rem'}}/>
                <div className="card-body">
                    <h6 className="card-title">Post-it {props.Name}</h6>
                    <p className="card-text">Bloco Post-It R-330 refil 100fls.</p>
                    <p className="card-text">1cx&nbsp; - &nbsp;<b>R${props.Value}</b></p>
                </div>
            </div>
        </>
     );
}
 
export default Card;

