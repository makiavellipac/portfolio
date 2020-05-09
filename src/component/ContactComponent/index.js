import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css' 
import './index.css'

const ContactComponent=({icon,title,text,animation})=>{

    useEffect(()=>{
        Aos.init({duration:500});
      },[])

    return (
        <div className="col-md-3" data-aos={animation}>
            <div className="counter_component">
                {icon}
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ContactComponent;