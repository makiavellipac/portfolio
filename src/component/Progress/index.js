import React,{useEffect} from 'react';
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Progress = ({name,value,aos})=>{
    useEffect(()=>{
        Aos.init({duration:500});
      },[])
    return(
        <div className="progress-container" data-aos={aos}>
            <span className="name">{name}</span>
            <span className="value">
                <span>{value}</span>
                %
            </span>
            <div className="progress" style={{width:value+"%"}}></div>
        </div>
    )
}

export default Progress;