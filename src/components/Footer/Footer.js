import React from 'react';
import "./style.css"

import {Container,Col,Row} from "reactstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";

const Footer = () => {

    return <footer className="footer">
        <Container>
            <Row className=" footer_all">
<div className="icons">
    <Link><i className="ri-instagram-line"></i></Link>
<Link><i className="ri-facebook-line"></i></Link>
    <Link><i className="ri-telegram-line"></i></Link>
    <Link><i className="ri-google-line"></i></Link>
    <Link><i className="ri-apple-line"></i></Link>
    <Link> <i className="ri-google-play-line"></i></Link>
</div>
                <div className="bank_carts  ">
                    <Link style={{fontSize:"39px"}}> <e><i className="ri-visa-line"></i></e></Link>
                    <Link> <e> MBANK</e></Link>
                    <Link style={{fontSize:"39px"}}> <e><i className="ri-mastercard-line"></i></e></Link>
                </div>
 <p className="text-center"> pr@goldapple.kg- для запросов СМИ
 </p>
            </Row>
        </Container>
    </footer>
};

export default Footer;