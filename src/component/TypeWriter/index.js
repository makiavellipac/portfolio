import React,{useState,useEffect} from 'react'
import './index.css'


const TypeWriter =(props) =>{
 const [count,setCount]=useState(0);
 const [delay,setDelay]=useState(200);
 const [meaning,setMeaning]=useState(true);
 const [size]=useState(props.perfil.length+5);
 
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
            setDelay(200);
        }
     }
     return()=>clearInterval(interval);

 },[count,delay,meaning,size])



return(
    <div className="Typewriter">
        <span className="Tipewriter_wraper">
            {subs(props.perfil,count)}
        </span>
        <span className="Tipewriter_cursor">|</span>
    </div>
)
    
}

export default TypeWriter