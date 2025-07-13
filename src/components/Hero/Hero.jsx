import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Your Name</span><br />Software Engineer</h1>
          <p className="hero-subtitle">I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2563eb" d="M42.3,-61.9C55.3,-54.6,66.8,-43.2,73.5,-29.1C80.2,-15,82.1,1.7,79.7,17.1C77.3,32.4,70.6,46.5,60.6,58.2C50.6,69.9,37.3,79.3,22.1,83.8C6.9,88.4,-10.1,88.2,-25.2,82.7C-40.3,77.3,-53.5,66.7,-62.5,53.5C-71.5,40.3,-76.4,24.5,-78.9,7.5C-81.3,-9.5,-81.4,-27.7,-75.3,-42.9C-69.2,-58.1,-56.9,-70.4,-42.5,-76.9C-28.1,-83.4,-11.5,-84.1,2.8,-88.4C17.1,-92.7,34.3,-100.6,42.3,-61.9Z" transform="translate(250 250)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;