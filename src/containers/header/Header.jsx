import React from "react";
import ai from '../../assets/me.png';
import './header.css';
import { down , scrollToSection } from './fun.js';

export const Header = () => {
    return (
        <div className="gpt3__header" id="home">
            <div className="gpt3__header-content">
                <div className="oper">
                    <h1 className="gradient__text">Hi! I&apos;m Shyam Jha </h1>
                    <p>"Crafting Innovative Solutions, Transforming Ideas into Code, Building Tomorrow's Technology Today"</p>
                    <div className="but-hol">
                        <div className="But">
                            <button onClick={down}>Download My Resume</button>
                        </div>
                        <div className="But">
                            <button onClick={() => scrollToSection('projects')}>Check Out My Projects</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="gpt3__header-image">
                <img src={ai} alt="me" />
            </div>
        </div>
    );
};



export default Header;
