import React from 'react';
import RandomText from '../../component/RandomText'
import Service from '../../component/Service'
import IconReact from '../../component/IconReact'
import IconNode from '../../component/IconNode'
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
                                <Service 
                                    animated="fadeInLeft"
                                    children={<IconReact/>}
                                    name="React"
                                    description="Lorem fkvkfkdmvk"
                                    />
                                <Service 
                                    animated="fadeInLeft"
                                    children={<IconNode/>}
                                    name="Node"
                                    description="Lorem fkvkfkdmvk"
                                    />
                            </div>
                         </div>      
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;