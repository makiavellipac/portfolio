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
                <Progress name="React"  value="90" aos="fade-left"/>
                <Progress name="Angular"  value="40" aos="fade-right"/>
                <Progress name="Vue"  value="20" aos="flip-left"/>
                <Progress name="Node Js"  value="60" aos="flip-right"/>
                <Progress name="Express"  value="90" aos="fade-left"/>
                <Progress name="Mongo Db"  value="60" aos="fade-right"/>
                <Progress name="MySQL"  value="50" aos="flip-left"/>
                <Progress name="JavaScript"  value="95" aos="flip-right"/>
                <Progress name="Java"  value="75" aos="fade-left"/>
                <Progress name="Phyton"  value="35" aos="fade-right"/>
                <Progress name="Php"  value="25" aos="flip-left"/>
                <Progress name="Css"  value="50" aos="flip-right"/>
            </div>
        </div>
    )
}

export default Skills;