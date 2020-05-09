import React from 'react';
import Navbar from './component/NavBar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'



import './index.css'





function App() {
 
  
  return (
    <div id="portfolio">
      <div style={{outline:'none'}} tabIndex='-1' id='portfolio-focus-wraper'>
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Services />
        <Portfolio/>
        <Contact/>
      </div>      
    </div>
  );
}

export default App;
