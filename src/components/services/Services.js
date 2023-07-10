import React from 'react';
import {Col,Container,Row} from "reactstrap";
import {motion} from "framer-motion";
import "../services/servise.css"
import serviceData from "../../assets/data/serviceData";
const Services = () => {
    return <section className="services">
        <Container >
            <Row>
                {serviceData.map((item,index)=>(
                    <Col wh lg="3" sm="4" key={index} >
                        <div className="service__item" style={{background:`${item.bg}`}}>
                            <span> <i className={item.icon}> </i></span>
                            <h3>  {item.title}</h3>
                            <p>{item.subtitle} </p>
                        </div>
                    </Col>
                ))

                }

            </Row>
        </Container>
    </section>
};

export default Services;