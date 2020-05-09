import React from 'react'
import './index.css'

import {Link} from 'react-scroll';

const Navigation =({classes}) =>(
    <div className={`navigation ${classes}`} >
        <div className="links">
            <ul>
                <li>
                    <Link to="home" smooth="true" duration={1000}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth="true" duration={1000}>Sobre mi</Link>
                </li>
                <li>
                    <Link to="services" smooth="true" duration={1000}>Servicios</Link>
                </li>
                <li>
                    <Link to="portafolio" smooth="true" duration={1000}>Portafolio</Link>
                </li>
                <li>
                    <Link to="contact" smooth="true" duration={1000}>Contacto</Link>
                </li>
            </ul>
        </div>
    </div>
)
export default Navigation