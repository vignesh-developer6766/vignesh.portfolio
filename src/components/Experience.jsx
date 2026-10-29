import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-label="Professional Experience and Internships">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Experience & Internships</h2>
          <p className="section-subtitle">
            Industry exposure and practical application of machine learning workflows.
          </p>
        </div>

        <div className="timeline-container">
          {profileData.experience.map((exp, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-org">{exp.organization}</div>
                </div>
                <span className="timeline-badge">{exp.type}</span>
              </div>

              <div className="timeline-meta">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={15} aria-hidden="true" />
                  Duration: {exp.duration}
                </span>
              </div>

              <ul className="timeline-bullets">
                {exp.highlights.map((bullet, idx) => (
                  <li className="timeline-bullet-item" key={idx}>
                    <CheckCircle2 size={16} className="timeline-check-icon" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
