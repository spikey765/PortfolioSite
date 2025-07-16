import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <i className={project.icon}></i>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href="#" className="btn btn-outline">View Demo</a>
          <a href="#" className="btn">Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;