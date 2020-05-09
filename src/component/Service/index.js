import React,{useEffect} from 'react';
import './index.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Service =({classes="",animated,children,name,description}) =>{
    useEffect(()=>{
        Aos.init({duration:1000});
      },[])
    return(
        <div className={classes+" service col-md-4"} data-aos={animated}>
            <div style={{opacity:"1",height:"auto"}} >
                {children}
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Service;