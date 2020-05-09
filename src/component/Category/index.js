import React from 'react';
import './index.css'

const Category=({name,classes,onClick})=>{
    
    return(
        <button className="portfolio_category" onClick={onClick}>
            <span className={classes}>
                {name}
            </span>
        </button>
    )
}
export default Category;