import React from 'react'
import ContactComponent from '../ContactComponent'
import IconPhone from '../IconPhone'
import IconMail from '../IconMail'
import IconLinkedin from '../IconLinkedin'
import IconGithub from '../IconGithub'
import './index.css'


const BarContact =()=>{
    return(
        <div className="bottom row">
            <div className="container">
                <ContactComponent icon={<IconPhone/>} title="Telefono" text="22 25 40 80 08" animation="fade-left"/>
                <ContactComponent icon={<IconMail/>} title="Correo" text="ridesburak@gmail.com" animation="fade-up"/>
                <ContactComponent icon={<IconLinkedin/>} title="Linkedin" text="santiago-gonzalez-mancilla" animation="fade-down"/>
                <ContactComponent icon={<IconGithub/>} title="Github" text="makiavellipac" animation="fade-right"/>
            </div>
        </div>
    )
}

export default BarContact;