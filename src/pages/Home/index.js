import React from 'react'
import Glitch from '../../component/Glitch'
import TypeWriter from '../../component/TypeWriter'
import './index.css'
const Home = ()=>{
    const perfil=[
        "Full Stack Web Developer",
        "MERN Stack",
        "MEAN Stack",
        "Ing. Ciencias De La Computación"
      ]

    return(
    
        <section id="home" className="firstSection" style={{height:"auto"}}>
            <div className="row">
                <div className="content col-md-6">
                    <div className="content-text">
                        <div className="line-text">
                            <h4>Hola, Bienvenido</h4>
                        </div>
                        <Glitch name="Santiago AGM"/>
                        <TypeWriter perfil={perfil}/>
                        <a className="hover-button" href="http://localhost:3000/download_cv" rel="noopener noreferrer" target="_blank">
                            <span>
                                Descargar CV
                            </span>
                        </a>
                    </div>
                </div>
                <div className="img col-md-6">
                    <img src="images/santiago3.JPG" alt="person"/>
                </div>
            </div>
        </section>
    )
}

export default Home