import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">@</h1>
        <div className="contact-content">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            I am actively seeking internship opportunities to further develop my skills. 
            If you have any openings or would like to discuss potential collaborations, 
            I would love to hear from you!
          </p>
          <a href="mailto:muhammad.alam-3@student.manchester.ac.uk">
            <button className="contact-button">Say Hello!</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;