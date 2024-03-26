import React from 'react';
import { RiReactjsFill, RiHtml5Fill } from 'react-icons/ri';
import { DiDjango } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiLichess } from "react-icons/si";
import { HiMiniCommandLine } from "react-icons/hi2";
import { MdOutlineDataArray } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileJsxDuotone } from "react-icons/pi";
import Article from '../../components/article/Article';
import { blog02, blog03, blog04, blog05 } from './importblog';
import './blog.css';

const articlesData = [
  {
    imgUrl: blog02,
    date: "Chess Game in C++ from scratch",
    text: "Dynamic Chess is a C++ chess game built from scratch, featuring dynamic memory allocation and innovative 3D array logic. With optimized memory usage and efficient handling of game elements, it offers a captivating experience for chess enthusiasts. ",
    icons: [<SiLichess color="#fff" size={25} />, < TbBrandCpp color="#fff" size={25} />, <MdOutlineDataArray color="#fff" size={25} />, <HiMiniCommandLine color="#fff" size={25} />]
  },
  {
    imgUrl: blog03,
    date: "Music Player Using Html css and javascript",
    text: "Introducing HarmonyTune: a full-fledged music player crafted using HTML, CSS, and JavaScript. Dive into a seamless musical journey with its intuitive user interface and dynamic functionality. SneekiMusic offers a rich listening experience, smooth playback controls. Elevate your music experience.",
    icons: [<RiHtml5Fill color="#fff" size={25} />, <FaCss3Alt color="#fff" size={25} />, <IoLogoJavascript color="#fff" size={25} />]
  },
  {
    imgUrl: blog04,
    date: "Personalised Portfolio In react",
    text: "Presenting my personal portfolio, meticulously designed and developed using React. Dive into a showcase of my skills, projects, and achievements, crafted with passion and precision. With a sleek and modern interface, my portfolio offers a seamless browsing experience, inviting visitors to explore my journey and capabilities.",
    icons: [<RiReactjsFill color="#fff" size={25} />, <FaCss3Alt color="#fff" size={25} />, < PiFileJsxDuotone color = "#fff" size = { 25 } />]
  },
  {
    imgUrl: blog05,
    date: "Explore Cinematic Universes: Watching links and chatrooms ",
    text: "A dynamic platform powered by Django and Bootstrap, offering seamless access to direct viewing links and interactive chat rooms. Navigate effortlessly through a curated collection of cinematic masterpieces while engaging with fellow enthusiasts in real-time discussions.",
    icons: [< DiDjango color="#fff" size={25} />, <FaBootstrap color="#fff" size={25} />, <FaCss3Alt color="#fff" size={25} />]
  },
];

const Blog = () => (
  <div className="gpt3__blog" id="projects">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Here are my Projects !!!</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        {articlesData.map((article, index) => (
          <Article
            key={index}
            imgUrl={article.imgUrl}
            date={article.date}
            text={article.text}
            icons={article.icons}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
