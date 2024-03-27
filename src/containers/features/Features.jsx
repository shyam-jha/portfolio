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
    text: 'I led initiatives aimed at fostering sustainable business development. Through innovative research and strategic planning, our team implemented projects that aligned with Enactus mission to drive positive social impact while promoting environmentally conscious and economically viable business practices',
  },
  {
    title: 'ACM DDUC',
    sub: 'Core Team',
    text: 'I am dedicated to advancing technology. With a passion for computer science our team collaborates to oraganize events, workshops, and initiatives that empowers individual in tech community',
  },
  {
    title: 'Data Analytics Club',
    sub: 'Executive Team',
    text: 'Through collaboration with industry partners and hands-on projects, we empower members to sharpen their analytics and make meaningfull contribution, skill developnement, and techology advancement',
  },
  {
    title: 'Sanganika',
    sub: 'Member',
    text: 'With a passion for Computer Science and commitment to excellence, I actively contribute to our societ initiatives.',
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
