import React from 'react';
import './article.css';
import { RiLinkUnlink, RiGithubFill } from 'react-icons/ri';


const Article = ({ imgUrl, date, text, icons }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      {/* Translucent overlay div */}
      <div className="image-overlay">
        {/* Icons */}
        <div className="icon-container">
          <RiGithubFill size={40} color='white' />
          <p className='gradient__text'><a href='#'>Source Code</a></p>
          <RiLinkUnlink  size={40} color='#fff' />
          <p className='gradient__text'><a href='#'>Direct Link</a></p>
        </div>
      </div>
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{date}</h3>
        <p>{text}</p>
      </div>
      <div className='tech'>
        <div className='head'>
          <p>TECH STACK</p>
        </div>
        <div className="icons-container">
          {icons && icons.map((icon, index) => (
            <div key={index} className="icon">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Article;
