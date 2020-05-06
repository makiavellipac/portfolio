import React from 'react';
import './index.css';

const Service =(props) =>{
    return(
        <div className="service col-md-4">
            <div className={props.animated+" animated fast"} style={{opacity:"1",height:"auto"}}>
                {props.children}
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Service;