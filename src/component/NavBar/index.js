import React, { useState } from 'react'
import Opener from '../Opener'
import Navigation from '../Navigation'
import './index.css'

const Navbar =() =>{
    const [classes,setClasses]=useState('');
    const setClass=()=>{
        if(classes==="active"){
            setClasses('')
        }
        else{
            setClasses('active')
        }
    }
    return(
    <>
        <Opener onClick={setClass}/>
        <Navigation classes={classes} onClick={setClass}/>
    </>
)
}
export default Navbar