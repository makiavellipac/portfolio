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
                <Progress name="Vue"  value="20"/>
                <Progress name="Node Js"  value="60"/>
                <Progress name="Express"  value="90"/>
                <Progress name="Mongo Db"  value="60"/>
                <Progress name="My Sql"  value="50"/>
                <Progress name="JavaScript"  value="95"/>
                <Progress name="Java"  value="75"/>
                <Progress name="Phyton"  value="35"/>
                <Progress name="Php"  value="25"/>
                <Progress name="Css"  value="50"/>
            </div>
        </div>
    )
}

export default Skills;