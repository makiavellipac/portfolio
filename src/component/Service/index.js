import React from 'react';
import './index.css';

const Service =({classes="",animated,children,name,description}) =>{
    return(
        <div className={classes+" service col-md-4"}>
            <div className={animated+" animated fast"} style={{opacity:"1",height:"auto"}}>
                {children}
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Service;