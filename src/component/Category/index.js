import React from 'react';
import './index.css'

const Category=({name,classes=''})=>{
    return(
        <button className="portfolio_category">
            <span className={classes}>
                {name}
            </span>
        </button>
    )
}
export default Category;