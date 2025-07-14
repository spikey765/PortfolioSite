import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>Hello! I'm a passionate software engineer with expertise in building web applications and solving complex problems. With a background in computer science and several years of industry experience, I specialize in creating efficient, scalable solutions.</p>
            <p>My journey in tech began during my university years where I discovered my love for coding. Since then, I've worked with startups and established companies to deliver high-quality products that exceed expectations.</p>
            <p>When I'm not coding, you can find me hiking, reading science fiction, or contributing to open-source projects.</p>
            <div className="hero-btns" style={{ marginTop: '2rem' }}>
              <a href="#" className="btn">Download Resume</a>
            </div>
          </div>
          <div className="about-image">
            <div style={{ 
              background: 'linear-gradient(135deg, #2563eb, #8b5cf6)', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white', 
              fontSize: '1.5rem'
            }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>👨‍💻</div>
                <h3>Your Photo Here</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;