import React, { useState,useEffect } from 'react';
import RandomText from '../../component/RandomText';
import PortfolioSelector from '../../component/PortfolioSelector';
import PORTFOLIO_SERVICE from '../../services/portfolio'
import Project from '../../component/Project'
import './index.css';

const Portfolio=()=>{
    const [data,setData]=useState([])
    const [isActive,setIsActive]=useState(false)
    useEffect(()=>{
        PORTFOLIO_SERVICE.getAllProjects()
        .then(({data})=>{
            setData(data.data) 
            setIsActive(true)})
        .catch(()=>setData([]))
    },[])
    
    return(
        <section id="portfolio" className="portfolio" style={{height:"auto"}}>
            <div className="row">
                <div className="side col-md-2">
                    <RandomText name="Portafolio"/>
                </div>
                <div className="recent-works col-md-10">
                    <PortfolioSelector/>
                    <div className="content">
                            <div className="portfolio_container" style={{maxHeight:"inherit"}}>
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