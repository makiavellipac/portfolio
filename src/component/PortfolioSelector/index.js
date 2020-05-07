import React from 'react';
import Category from '../../component/Category'
import './index.css'

const PortfolioSelector=()=>{
    return(
        <div className="portfolio_selector">
            <Category name="Todos" classes="active"/>
            <Category name="JavaScript" />
            <Category name="React" />
            <Category name="NodeJs"/>
            <Category name="Express"/>
        </div>
    )
}

export default PortfolioSelector;