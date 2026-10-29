import React from 'react';
import { 
  Terminal, 
  Brain, 
  Layers, 
  Wrench, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  "Programming": <Terminal size={20} aria-hidden="true" />,
  "Machine Learning & Data": <Brain size={20} aria-hidden="true" />,
  "Frameworks & Web Development": <Layers size={20} aria-hidden="true" />,
  "Tools & Platforms": <Wrench size={20} aria-hidden="true" />,
  "Additional Technologies": <Code2 size={20} aria-hidden="true" />
};

export default function Skills() {
  return (
    <section className="section" id="skills" aria-label="Technical Skills and Competencies">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core competencies across machine learning algorithms, Python backend engineering, and software tooling.
          </p>
        </div>

        <div className="skills-grid">
          {profileData.skillCategories.map((cat) => (
            <div className="skill-category-card" key={cat.name}>
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  {CATEGORY_ICONS[cat.name] || <Terminal size={20} />}
                </div>
                <h3 className="skill-category-title">{cat.name}</h3>
              </div>

              <div className="skill-chips-group">
                {cat.skills.map((skill) => (
                  <div className="skill-chip" key={skill}>
                    <CheckCircle2 size={14} color="#2563eb" aria-hidden="true" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
