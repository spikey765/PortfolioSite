import React from 'react';
import './Experience.css';
import { experienceData } from '../../data/experience';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div 
              className="timeline-item" 
              key={index}
              style={{ left: index % 2 === 0 ? '0' : '50%' }}
            >
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;