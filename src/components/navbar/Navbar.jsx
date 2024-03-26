import React from "react";
import { useState } from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine, RiContactsLine, RiHomeOfficeFill, RiGithubFill, RiReactjsFill, RiProjector2Line, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';



export const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">

            <div className="logo">
                <p>PORTFOLIO</p>
            </div>


            <div className="links">
                <div className="li"><RiHomeOfficeFill color="#fff" size={16} /><p><a href="#">Home</a></p></div>
                <div className="li"><RiReactjsFill color="#fff" size={16} /><p><a href="#skills">Skills</a></p></div>
                <div className="li"><RiProjector2Line color="#fff" size={16} /><p><a href="#projects">Projects</a></p></div>
                <div className="li"><RiContactsLine color="#fff" size={16} /><p><a href="#experience">Experience</a></p></div>
            </div>

            <div className="icons">
                <div id="github"><a href="https://github.com/shyam-jha"><RiGithubFill color="#fff" size={18} /></a></div>
                <div id="linkedin"><a href="https://www.linkedin.com/in/shyam-jha-0642ab258"><RiLinkedinFill color="#fff" size={18} /></a></div>
                <div id="instagram"><a href="https://www.instagram.com/_shyam_jha__?igsh=MWNneGZ1cjh0ajlqeg=="><RiInstagramFill color="#fff" size={18} /></a></div>
            </div>




            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => SetToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => SetToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3_navbar-menu_container-links">
                            <div className="li"><RiHomeOfficeFill color="#fff" size={22} /><p><a href="#">Home</a></p></div>
                            <div className="li"><RiReactjsFill color="#fff" size={22} /><p><a href="#skills">Skills</a></p></div>
                            <div className="li"><RiProjector2Line color="#fff" size={22} /><p><a href="#projects">Projects</a></p></div>
                            <div className="li"><RiContactsLine color="#fff" size={22} /><p><a href="#experience">Experience</a></p></div>
                        </div>
                        <div className="gpt3_navbar-menu_container-links-sign">
                            <div><a href="https://github.com/shyam-jha"><RiGithubFill color="#fff" size={22} /></a></div>
                            <div><a href="https://www.linkedin.com/in/shyam-jha-0642ab258"><RiLinkedinFill color="#fff" size={22} /></a></div>
                            <div><a href="https://www.instagram.com/_shyam_jha__?igsh=MWNneGZ1cjh0ajlqeg=="><RiInstagramFill color="#fff" size={22} /></a></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};



export default Navbar;
