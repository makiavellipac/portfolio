import React from 'react';
import RandomText from '../../component/RandomText';
import Service from '../../component/Service';
import IconReact from '../../component/IconReact';
import IconAngular from '../../component/IconAngular';
import IconNode from '../../component/IconNode';
import IconBackend from '../../component/IconBackend';
import IconJava from '../../component/IconJava';
import IconApi from '../../component/IconApi';
import './index.css';

const Services=()=>{
    return(
        <section id="services" className="services" style={{height:"auto"}}>
            <div className="top row" style={{maxHeight:"inherit"}}>
                <div className="content">
                    <div className="col-md-12">
                        <div className="line-text">
                            <h4>Servicios</h4>
                        </div>
                        <RandomText name="Lo que hago"/>
                        <div className="services_container" style={{minHeight:"inherit"}}>
                           <div className="container">
                               <div className="row">
                                   <Service
                                       animated="fadeInLeft"
                                       children={<IconReact/>}
                                       name="React"
                                       description="React es una biblioteca Javascript desarrollada por Facebook de código 
                                                    abierto diseñada para crear interfaces de usuario, su objetivo es de 
                                                    facilitar el desarrollo de aplicaciones en una sola página."/>
                                   <Service
                                       classes="border-side" 
                                       animated="fadeInDown"
                                       children={<IconAngular/>}
                                       name="Angular"
                                       description="Angular es un framework JavaScript, gratuito y Open Source, creado por 
                                                    Google y destinado a facilitar la creación de aplicaciones web modernas
                                                     de tipo SPA (Single Page Application)."/>
                                    <Service
                                       animated="fadeInRight"
                                       children={<IconBackend/>}
                                       name="Express Back-End"
                                       description="Un programador backend es aquel que trabaja la arquitectura interna de 
                                                    una web o aplicación móvil que va vinculado a todo el contenido 
                                                    (formularios, mapas, bases de datos, etc.) que se integrará con todo lo 
                                                    que ve el usuario final en una web o aplicación móvil"/>
                                    <Service
                                       animated="fadeInRight"
                                       children={<IconNode/>}
                                       name="Node Js"
                                       description="Node.js es un entorno de tiempo de ejecución de JavaScript. Este entorno
                                                     de tiempo de ejecución en tiempo real incluye todo lo que se necesita 
                                                     para ejecutar un programa escrito en JavaScript."/>
                                    <Service
                                       classes="border-side"
                                       animated="fadeInUp"
                                       children={<IconJava/>}
                                       name="JavaScript"
                                       description="JavaScript es un lenguaje de programación que puede ser usado en cualquier
                                                     tipo de navegadores. Permite, entre otras cosas, crear contenido dinámico 
                                                     e imágenes animadas y controlar archivos multimedia."/>
                                    <Service
                                       animated="fadeInLeft"
                                       children={<IconApi/>}
                                       name="API"
                                       description="La API define la forma correcta para que un desarrollador escriba un programa 
                                                    que solicite servicios de un sistema operativo (SO) u otra aplicación."/>   
                               </div>
                           </div>
                        </div>      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;