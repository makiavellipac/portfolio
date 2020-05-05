import React from 'react';
import Progress from '../Progress';
import './index.css'

const Skills = ()=>{
    return(
        <div className="skills col-md-6">
            <div className="line-text">
                <h4>Mis Habilidades</h4>            
            </div>
            <div className="skills-container">
                <Progress name="React"  value="90"/>
                <Progress name="Angular"  value="40"/>
                <Progress name="Vue"  value="10"/>
            </div>
        </div>
    )
}

export default Skills;