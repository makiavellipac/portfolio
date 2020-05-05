import React from 'react';
import Content from '../../component/Content';
import Skills from '../../component/Skills';
import './index.css'

const AboutMe = ()=>{
    return(
        <section id="about" className="about" style={{height:"auto"}}>
            <div className="row">
                <Content/>
                <Skills/>
            </div>
        </section>
    )
}

export default AboutMe;
