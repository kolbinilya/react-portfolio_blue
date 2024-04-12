import React from 'react';
import './header.css'
import Cta from './Cta'
import Me from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <h5>hello I'm</h5>
                <h1>Your name</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <Cta/>
                <HeaderSocials/>
                <a href="#contact" className="scroll__down">Scroll Down</a>
                <div className="me">
                    <img src={Me} alt="me"/>
                </div>
            </div>
        </header>
    );
};

export default Header;