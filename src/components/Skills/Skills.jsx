import React from 'react';
import './Skills.css';
import { skillsData } from '../../data/skills';
import { getSkillIcon } from '../../utils/skillIcons';

const Skills = () => {
  // Categories that should show icons
  const categoriesWithIcons = ['Frontend', 'Backend', 'Tools & DevOps'];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03. </span>Skills
        </h2>
        <div className="skills-container">
          {skillsData.map((category, index) => {
            const showIcons = categoriesWithIcons.includes(category.category);
            return (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.category}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, idx) => {
                    const Icon = showIcons ? getSkillIcon(skill) : null;
                    return (
                      <li key={idx} className={Icon ? 'skill-with-icon' : ''}>
                        {Icon && <Icon className="skill-icon" />}
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;