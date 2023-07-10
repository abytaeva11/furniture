import React,{ useRef,useEffect} from 'react';
import "./header.css"
import logo from "../../assets/images/eco-logo.png"
import {NavLink} from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png"
import { Container,Row} from "reactstrap";
import {motion} from "framer-motion";


const Header = () => {
    const nav__link=[
        {
            path:"home",
            display:"Home"
        },
        {
            path:"shop",
            display:"Shop"
        }, {
            path:"cart",
            display:"Cart"
        },
    ]


    return <header className="header">
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <div>
                            <h1>Multimart</h1>
                            <p>Since 1995</p>
                        </div>
                    </div>
                        <div className="navigation" >
                            <ul className="menu" >
                                {
                                    nav__link.map((item,index)=>(
                                    <li className="nav__item" key={index}>
                                    <NavLink to={item.path} className={(navClass)=>navClass.isActive?'nav__active':''}> {item.display}</NavLink>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="nav__icons">
                            <span className="fav__icon"><i className="ri-heart-line"></i>  <span className="badge"> 1</span></span>

                            <span className="cart__icon" > <i className="ri-shopping-bag-line"></i>  <span className="badge"> 1</span>     </span>
                            <span> <motion.img whileTap={{scale:1.2}} src={userIcon} alt=""/></span>
                            <div className="mobile__menu">
                                <span > <i className="ri-menu-line"></i></span>

                            </div>
                        </div>


                </div>
            </Row>

        </Container>
    </header>
};

export default Header;
// const  menuToggle=()=> menuRef.current.classList.toggle("active__menu")
// const headerRef=useRef(null)
// const stickyHeaderFunc=()=>{
//     window.addEventListener('scroll',()=>{
//         if(document.body.scrollTop>80||document.documentElement.scrollTop>
//             80){
//             headerRef.current.classList.add( 'sticky__header')
//         }else{
//             headerRef.current.classList.remove('sticky__header')
//         }
//     })
// }
// useEffect(()=>{
//     stickyHeaderFunc()
//     return()=>window.removeEventListener("scroll",stickyHeaderFunc)
// })