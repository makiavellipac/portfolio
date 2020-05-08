import React from 'react';
import IconGithub from '../../component/IconGithub';
import IconLink from '../../component/IconLink';
import './index.css';

const Project=({images,title,description,tecnologias,link,github,_id})=>{
    return (
        <div className="portfolio_item" style={{width:"100%"}}>
            <div className="animated fadeIn project" style={{opacity:1,height:"auto"}}>
                <img src={images} alt={title}/>
                <div className="description">
                    <h2>
                        <span>{title}</span>
                    </h2>
                    <p>
                        {description}
                    </p>
                    <div className="tag-container">
                        <div className="tags">
                        {tecnologias.map(tecnologia=><div className="tag" key={_id*Math.random()}>{tecnologia}</div>)}
                        </div>
                        <div className="social-tag">
                            <a href={link}><IconGithub/></a>
                            <a href={github}><IconLink/></a>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Project;