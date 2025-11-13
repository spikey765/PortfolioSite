import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  // Function to highlight achievements in description
  const highlightAchievements = (text) => {
    let highlightedText = text;
    
    // First, highlight "Won X place" patterns (most specific, process first)
    highlightedText = highlightedText.replace(/(Won\s+\d+(?:st|nd|rd|th)\s+place[^.]*)/gi, (match) => {
      return `<span class="achievement-highlight">${match.trim()}</span>`;
    });
    
    // Then process other patterns, but skip matches that are inside already highlighted spans
    const otherPatterns = [
      /(Runner-Up[^.]*)/gi,
      /(\d+(?:st|nd|rd|th)\s+Place[^.]*)/gi,
      /(Winner[^.]*)/gi,
      /(Champion[^.]*)/gi
    ];
    
    otherPatterns.forEach(pattern => {
      highlightedText = highlightedText.replace(pattern, (match, p1, offset) => {
        // Check if this match is already inside a highlighted span
        const beforeMatch = highlightedText.substring(0, offset);
        const openSpans = (beforeMatch.match(/<span class="achievement-highlight">/g) || []).length;
        const closeSpans = (beforeMatch.match(/<\/span>/g) || []).length;
        
        // If we're inside a highlighted span, don't highlight again
        if (openSpans > closeSpans) {
          return match;
        }
        
        return `<span class="achievement-highlight">${match.trim()}</span>`;
      });
    });
    
    return { __html: highlightedText };
  };

  return (
    <div className="project-card">
      <div className="project-screenshot">
        {project.screenshot ? (
          <img 
            src={project.screenshot} 
            alt={`${project.title} screenshot`} 
            className="screenshot-image"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="placeholder-screenshot">
          <div className="placeholder-text">Project Screenshot</div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description" dangerouslySetInnerHTML={highlightAchievements(project.description)} />
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${project.title} demo`}
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;