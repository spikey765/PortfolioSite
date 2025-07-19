// src/components/SocialSidebar/SocialSidebar.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-icons">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a 
          href="mailto:youremail@example.com"
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