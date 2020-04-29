import React from 'react'
import './index.css'

const Glitch =(props) =>(
    <div className="glitch" data-text={props.name}>
        {props.name}
    </div>
)
export default Glitch