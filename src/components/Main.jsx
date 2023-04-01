import React from 'react';
import './main.css';
import img from '../utils/IMG_20221008_180345_973-removebg-preview.png';

const Main = ({ scrollToNextComponent }) => {
  return (
    <div className="main">
      <div className="intro">
        <h2>
          Hello 👋
          <br />
          I'm Olajide
        </h2>
      </div>
      <div className="back-tile">
        <img src={img} alt="botuns image" className="pro-img" />
      </div>
      <h1 className="title">FullStack Engineer</h1>
      <a href="#strength" className="pro-cta" onClick={scrollToNextComponent}>
        Continue →
      </a>
    </div>
  );
};

export default Main;
