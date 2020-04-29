import React,{useState,useEffect} from 'react'
import './index.css'


const TypeWriter =(props) =>{
 const [count,setCount]=useState(0);
 const [delay,setDelay]=useState(150);
 const [meaning,setMeaning]=useState(true);
 const [sizeArray]=useState(props.perfil.length);
 const [size,setSize]=useState(props.perfil[0].length+5);
 const [position,setPosition]=useState(0);
 
 const subs = (perfil,num)=>perfil.substring(0,num);

 useEffect(()=>{
     let interval=null;

     if(meaning){
         interval=setInterval(()=>{
             setCount(count+1);
         },delay)
         if(count===size){
             setMeaning(!meaning);
             setDelay(50);
         }
     }
     else{
        interval=setInterval(()=>{
            setCount(count-1);
        },delay)
        if(count===0){
            setMeaning(!meaning);
            setDelay(150);
            sizeArray===position+1?setPosition(0):setPosition(position+1);
        }
     }
     setSize(props.perfil[position].length+5);
     return()=>clearInterval(interval);

 },[count,delay,meaning,size,position,sizeArray,props.perfil])



return(
    <div className="Typewriter">
        <span className="Tipewriter_wraper">
            {subs(props.perfil[position],count)}
        </span>
        <span className="Tipewriter_cursor">|</span>
    </div>
)
    
}

export default TypeWriter