import React, { useState,useEffect } from 'react';
import RandomText from '../../component/RandomText';
import PortfolioSelector from '../../component/PortfolioSelector';
import PORTFOLIO_SERVICE from '../../services/portfolio'
import Project from '../../component/Project'
import Aos from 'aos'
import 'aos/dist/aos.css' 
import './index.css';

const Portfolio=()=>{
    
    useEffect(()=>{
        Aos.init({duration:500});
      },[])

    const [data,setData]=useState([])
    const [isActive,setIsActive]=useState(false)
    const functions={
        allData:()=>{
            setIsActive(false)
            PORTFOLIO_SERVICE.getAllProjects()
            .then(({data})=>{
                setData(data.data)
                setIsActive(true)})
            .catch(()=>setData([]))
        },
        JavaData:()=>{
            setIsActive(false)
            PORTFOLIO_SERVICE.getAllType("JavaScript")
            .then(({data})=>{
                setData(data.data)
                setIsActive(true)})
            .catch(()=>setData([]))
        },
        ReactData:()=>{
            setIsActive(false)
            PORTFOLIO_SERVICE.getAllType("React")
            .then(({data})=>{
                setData(data.data)
                setIsActive(true)})
            .catch(()=>setData([]))
        },
        NodeData:()=>{
            setIsActive(false)
            PORTFOLIO_SERVICE.getAllType("NodeJs")
            .then(({data})=>{
                setData(data.data)
                setIsActive(true)})
            .catch(()=>setData([]))
        },
        ExpressData:()=>{
            setIsActive(false)
            PORTFOLIO_SERVICE.getAllType("Express")
            .then(({data})=>{
                setData(data.data)
                setIsActive(true)})
            .catch(()=>setData([]))
        },
    }
    useEffect(()=>{
        PORTFOLIO_SERVICE.getAllProjects()
        .then(({data})=>{
            setData(data.data) 
            setIsActive(true)})
        .catch(()=>setData([]))
    },[])
    
    return(
        <section id="portafolio" className="portfolio" style={{height:"auto"}} data-aos="fade-down">
            <div className="row">
                <div className="side col-md-2">
                    <RandomText name="Portafolio"/>
                </div>
                <div className="recent-works col-md-10">
                    <PortfolioSelector functions={functions}/>
                    <div className="content">
                            <div className="portfolio_container" style={{minHeight:"700px"}}>
                                {isActive&&
                                    data.map(proyecto=>
                                <Project 
                                    images={proyecto.img} 
                                    key={proyecto._id} 
                                    title={proyecto.title}
                                    description={proyecto.description}
                                    tecnologias={proyecto.tecnologias}
                                    link={proyecto.link}
                                    github={proyecto.github}
                                    _id={proyecto._id}
                                    animation="fade-up"
                                    />
                                )} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;