import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { RiGithubFill, RiReactjsFill, RiHtml5Fill, RiFileExcelFill } from 'react-icons/ri';
import { DiDjango, DiUbuntu } from "react-icons/di";
import { SiMysql, SiSqlite } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiMicrosoftPowerpointLogo, PiMicrosoftWordLogo } from "react-icons/pi";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="skills">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Here are my Skills </h1>
      <p>Front-End Tech: HTMl, CSS, Bootstrap, React Js </p>
      <div className='ic'><RiHtml5Fill color="#fff" size={25} /><FaCss3Alt color="#fff" size={25} /><FaBootstrap color="#fff" size={25} /><RiReactjsFill color="#fff" size={25} /></div>
      <p>Back-End: JavaScript, Django</p>
      <div className='ic'><IoLogoJavascript color="#fff" size={25} /><DiDjango color="#fff" size={25} /></div>
      <p>Databases: MySQL, SQLite</p>
      <div className='ic'><SiMysql color="#fff" size={25} /><SiSqlite color="#fff" size={25}></SiSqlite></div>
      <p>Technologies: Github, linux Ubuntu, Microsoft Tools</p>
      <div className='ic'><RiGithubFill color="#fff" size={25} /><DiUbuntu color="#fff" size={25} /><RiFileExcelFill color="#fff" size={25} /><PiMicrosoftWordLogo color="#fff" size={25} /><PiMicrosoftPowerpointLogo color="#fff" size={25} /></div>
      <h4>I am a passionate Developer/Learner aiming to learn more and make myself more efficient</h4>
    </div>
  </div>
);

export default Possibility;
