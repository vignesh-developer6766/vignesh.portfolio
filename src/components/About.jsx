import React from 'react';
import { Code, Brain, Database, Layers, Globe } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const HIGHLIGHT_ICONS = [
  <Code size={20} aria-hidden="true" />,
  <Brain size={20} aria-hidden="true" />,
  <Database size={20} aria-hidden="true" />,
  <Layers size={20} aria-hidden="true" />,
  <Globe size={20} aria-hidden="true" />
];

export default function About() {
  return (
    <section className="section section-subtle" id="about" aria-label="About Vignesh Rahul E.">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Combining computer science foundations with practical machine learning development.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Paragraphs */}
          <div className="about-text-content">
            {profileData.aboutNarrative.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Highlights Area */}
          <div className="about-highlights-list">
            {profileData.aboutHighlights.map((item, idx) => (
              <div className="highlight-card" key={item.title}>
                <div className="highlight-icon-wrap">
                  {HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length]}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
