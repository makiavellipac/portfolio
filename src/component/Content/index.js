import React from 'react';
import SocialBar from '../SocialBar'
import './index.css'

const Content = ()=>{
    return(
        <div className="content col-md-6">
            <div className="content-text">
                <div className="line-text">
                    <h4>Sobre Mi</h4>
                </div>
                <h3>
                    Soy un desarrollador Web Full Stack amante del código y de las motos
                </h3>
                <div className="separator"></div>
                <p>Me considero una persona alegre amante del código dispuesto a ayudar y 
                seguir aprendiendo. Desde los 13 años cuando adquirí mi primera computadora, 
                desarrolle habilidades en el área de la tecnología computacional, tomando 
                la decisión de estudiar la carrera de ingeniería en ciencias de la computación 
                en la BUAP, especializándome en el desarrollo web en Ironhack..</p>
                <SocialBar/>
            </div>
        </div>
    )
}

export default Content;
