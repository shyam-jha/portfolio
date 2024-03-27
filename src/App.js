import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Navbar, Article } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Blog />
    <Features />
    <Possibility />
    <Footer />
  </div>
);

export default App;