import React from 'react';
import { GraduationCap, MapPin, Calendar, Clock } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section section-subtle" id="education" aria-label="Academic Background and Education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academics</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundations in computer science, software engineering, and analytical problem-solving.
          </p>
        </div>

        <div className="timeline-container">
          {profileData.education.map((edu, idx) => (
            <div className="timeline-card" key={idx}>
              <div className="timeline-header">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                  <div 
                    style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '8px', 
                      backgroundColor: 'var(--color-primary-light)', 
                      color: 'var(--color-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <GraduationCap size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="timeline-role" style={{ fontSize: '1.25rem' }}>{edu.degree}</h3>
                    <div className="timeline-org" style={{ fontSize: '1.0625rem', marginTop: '2px' }}>
                      {edu.institution}
                    </div>
                  </div>
                </div>
                <span className="timeline-badge" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
                  <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {edu.status}
                </span>
              </div>

              <div className="timeline-meta" style={{ marginTop: '0.75rem', gap: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={15} aria-hidden="true" />
                  Academic Period: {edu.period}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={15} aria-hidden="true" />
                  {edu.location}
                </span>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: '0.75rem' }}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
