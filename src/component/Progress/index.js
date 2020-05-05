import React from 'react';
import './index.css'

const Progress = (props)=>{
    return(
        <div className="progress-container">
            <span className="name">{props.name}</span>
            <span className="value">
                <span>{props.value}</span>
                %
            </span>
            <div className="progress" style={{width:props.value+"%"}}></div>
        </div>
    )
}

export default Progress;