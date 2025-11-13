import React from 'react';
import './About.css';
import taimorImage from '/assets/images/taimor.jpg';
import pfp1Image from '/assets/images/pfp1.jpg';
import { skillsData } from '../../data/skills';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1 className="about-heading">
          <span className="about-number">01. </span>About Me
        </h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi there! I'm Taimor, a penultimate year CS student at the University of Manchester, an aspiring Software Engineer and Data Science enthusiast. 
            </p>   
            <p>
              With a strong background in computer science, I thrive in agile, collaborative work environments where I can apply my skills in software development and data analysis.
              I enjoy the challenge that comes with solving complex problems and often explore problems from multiple angles to properly plan my approach.
            </p>
            <p>
              My passion primarily lies in software engineering, where I have experience in full-stack development, from various hackathons to personal projects.
              Always willing to adapt, I've worked with various technologies across the stack based on project requirements and team needs. </p>
            <p>  
              Whether it's building user-friendly interfaces or laying the foundational backend systems, I enjoy the entire software development lifecycle in its entirety.
              For frontend development, I have a strong preference for React, Next.js and Tailwind CSS, while for backend development, I have experience with Node.js, Express.js and Python Flask for machine-learning based projects.
              I'm also comfortable with databases like Supabase and PostgreSQL, and I have a keen interest in cloud technologies, particularly AWS.
            </p>
            <p>
              My projects cover a range of real-world applications, from developing an engaging social party game for students to get creative with to addressing real world problems using AI in the fields of photojournalism and strength training.
            </p>
            <p>
              Outside of academics, I enjoy swimming, padel and travelling to explore new cultures and places. These activities help me maintain a healthy work-life balance and bring fresh perspectives to my work.
            </p>
            <p>
              Let's Connect! Open to opportunities, collaborations and networking.
            </p>
            
            <div className="skills-section">
              <h2 className="skills-heading">
                <span className="about-number">02. </span>Skills
              </h2>
              
              <div className="skills-grid">
                {skillsData.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h3 className="skill-category-title">{category.category}</h3>
                    <ul className="skill-list">
                      {category.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="image-frame">
              <img 
                src={taimorImage} 
                alt="Taimor Alam" 
                className="portrait-image"
              />
            </div>
            
            <div className="image-frame second-image">
              <img 
                src={pfp1Image} 
                alt="Taimor Alam Professional" 
                className="portrait-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;