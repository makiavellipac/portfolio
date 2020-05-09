import React, { useState, useEffect, useCallback } from 'react'
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const RandomText =(props) =>{

    const [caracters,setCaracters]=useState('');
    const [frames,setFrames]=useState(0);
    const [isActive,setisActive]=useState(true);
    const [position,setPosition]=useState(0);
    const size=props.name.length;
    const cadena=props.name;

    const random_text=num=>{
        var result           = '';
         var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%6/()=+*[]{}';
         var charactersLength = characters.length;
         for ( var i = 0; i < num; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
         }
         return result;
      }

    const final_text=useCallback((string,position)=>{
        let tam=string.length;
        let sub=string.substring(0,position);
        return sub+random_text(tam-position);
    },[])

    useEffect(()=>{
        let interval=null;
        Aos.init({duration:1000});
        if(isActive){
            interval=setInterval(()=>{
                setFrames(frames+1);
                setCaracters(random_text(size));
            },30);
            if(frames===5){
                setisActive(!isActive);
            }
        }
        else if(!isActive && size>=position){
            interval=setInterval(()=>{
                setPosition(position+1);
                setCaracters(final_text(cadena,position));
            },50)
        }
        else{
            clearInterval(interval);
        }
        return()=>clearInterval(interval);

    },[caracters,frames,isActive,position,size,cadena,final_text])

    return(
        <div className="RandomText" >
            <span className="random-text" data-aos="zoom-out-up">
                <span>{caracters}</span>
            </span>
        </div>
    )
}

export default RandomText