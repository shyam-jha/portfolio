import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';
import f4 from '../../assets/f4.jpg';

const featuresData = [
  {
    title: 'ENACTUS DDUC',
    sub: 'Director of Research and Developnment',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'ACM DDUC',
    sub: 'Core Team',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Data Analytics Club',
    sub: 'Executive Team',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Sanganika',
    sub: 'Member',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="experience">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Work Experience</h1>
      <div className='img-exp'>
        <div className='im1'>
          <img src={f1} alt='img' />
          <img src={f4} alt='img' />
        </div>
        <div className='im2'>
          <img src={f3} alt='img' />
          <img src={f2} alt='img' />
        </div>
      </div>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} sub={item.sub} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
