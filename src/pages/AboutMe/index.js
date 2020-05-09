import React,{useEffect} from 'react';
import Content from '../../component/Content';
import Skills from '../../component/Skills';
import './index.css'

import Aos from 'aos'

import 'aos/dist/aos.css'

const AboutMe = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    return(
    
            <section id="about" className="about" style={{height:"auto"}} data-aos="zoom-in-up">
            <div className="row">
                <Content/>
                <Skills/>
            </div>
        </section>
        
        
    )
}

export default AboutMe;
