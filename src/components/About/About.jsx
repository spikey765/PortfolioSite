import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const images = [
    { src: '/assets/images/taimor.jpg', alt: 'Taimor Alam' },
    { src: '/assets/images/pfp1.jpg', alt: 'Taimor Alam ' },
    { src: '/assets/images/pic.jpg', alt: 'Taimor Alam' },
    { src: '/assets/images/pic1.jpg', alt: 'Taimor Alam' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1 className="about-heading">
          <span className="about-number">01. </span>About Me
        </h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi there! I'm Taimor, a penultimate year CS student at the University of Manchester, an aspiring Software Engineer and DevOps enthusiast. 
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
          </div>
          
          <div className="about-image-container">
            <div className="image-carousel">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="image-frame">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="portrait-image"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
