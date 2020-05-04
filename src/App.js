import React from 'react';
import Navbar from './component/NavBar'
import Home from './pages/Home'
import './index.css'



function App() {
  
  return (
    <div id="portfolio">
      <div style={{outline:'none'}} tabIndex='-1' id='portfolio-focus-wraper'>
        <Navbar/>
        <Home/>
      </div>      
    </div>
  );
}

export default App;
