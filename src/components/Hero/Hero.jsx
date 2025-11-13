// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import frontImage from '../../assets/images/front.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    "CS Student",
    "Hackathon Enthusiast",
    "DevOps Intern",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1));
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Taimor Alam</span><br />
            <div className="typewriter">
              {text}
              <span className="cursor">|</span>
            </div>
          </h1>
          <p className="hero-subtitle">
           I enjoy putting in the effort to learn and apply new technologies.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src={frontImage} 
          alt="Taimor Alam" 
          className="hero-portrait"
        />
      </div>
    </section>
  );
};

export default Hero;