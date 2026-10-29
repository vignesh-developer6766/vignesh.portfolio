import React from 'react';
import { Award, Trophy, BookmarkCheck } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="section" id="certifications" aria-label="Certifications and Technical Activities">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Credentials & Events</span>
          <h2 className="section-title">Certifications & Activities</h2>
          <p className="section-subtitle">
            Accredited course completions and engineering event participations.
          </p>
        </div>

        <div className="certs-grid">
          {profileData.certificationsAndActivities.map((item, idx) => (
            <div className="cert-card" key={idx}>
              <div className={`cert-icon-wrap ${item.category}`}>
                {item.category === 'cert' ? (
                  <Award size={20} aria-hidden="true" />
                ) : (
                  <Trophy size={20} aria-hidden="true" />
                )}
              </div>

              <div className="cert-content">
                <h4>{item.title}</h4>
                <div className="cert-org">{item.organization}</div>
                <p style={{ marginTop: '0.25rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-dark-navy)' }}>{item.type}</span>
                  {item.note && ` — ${item.note}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
