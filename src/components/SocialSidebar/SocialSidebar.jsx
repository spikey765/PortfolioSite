// src/components/SocialSidebar/SocialSidebar.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-icons">
        <a 
          href="https://github.com/spikey765" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a 
          href="https://linkedin.com/in/taimoralam" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
        <a 
          href="mailto:muhammad.alam-3@student.manchester.ac.uk"
          aria-label="Email"
        >
          <FaEnvelope className="social-icon" />
        </a>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SocialSidebar;