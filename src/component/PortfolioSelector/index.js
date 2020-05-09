import React, { useState } from 'react';
import Category from '../../component/Category'
import './index.css'

const PortfolioSelector=({functions})=>{
    const [classes1,setClasses1]=useState('active');
    const [classes2,setClasses2]=useState('');
    const [classes3,setClasses3]=useState('');
    const [classes4,setClasses4]=useState('');
    const [classes5,setClasses5]=useState('');
    const setClass=()=>{
            setClasses1('active')
            setClasses2('')
            setClasses3('')
            setClasses4('')
            setClasses5('')
            functions.allData()
    }
    const setClass2=()=>{
        setClasses1('')
        setClasses2('active')
        setClasses3('')
        setClasses4('')
        setClasses5('')
        functions.JavaData()
    }
    const setClass3=()=>{
        setClasses1('')
        setClasses2('')
        setClasses3('active')
        setClasses4('')
        setClasses5('')
        functions.ReactData()
    }
    const setClass4=()=>{
        setClasses1('')
        setClasses2('')
        setClasses3('')
        setClasses4('active')
        setClasses5('')
        functions.NodeData()
    }
    const setClass5=()=>{
        setClasses1('')
        setClasses2('')
        setClasses3('')
        setClasses4('')
        setClasses5('active')
        functions.ExpressData()
    }
    return(
        <div className="portfolio_selector">
            <Category name="Todos" classes={classes1} onClick={setClass} />
            <Category name="JavaScript" classes={classes2} onClick={setClass2} />
            <Category name="React" classes={classes3} onClick={setClass3} />
            <Category name="NodeJs" classes={classes4} onClick={setClass4} />
            <Category name="Express" classes={classes5} onClick={setClass5} />
        </div>
    )
}

export default PortfolioSelector;