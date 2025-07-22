import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-simple">
          <p>
            <a 
              href="https://github.com/spikey765/PortfolioSite" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Built with React, HTML, CSS &amp; JavaScript by Taimor Alam.
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} Taimor Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
