import React from 'react'
import './index.css'


const RandomText =(props) =>{

return(
    <div className="RandomText">
        <span className="random-text">
            <span>{props.name}</span>
        </span>
    </div>
)
    
}

export default RandomText