import React from 'react';
import { ArrowRight, FileDown, ExternalLink } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home" aria-label="Introduction and Overview">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline and Actions */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="availability-badge" role="status">
                <span className="pulse-dot" aria-hidden="true" />
                {profileData.availability}
              </span>
            </div>

            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">{profileData.name}</h1>
            <div className="hero-title-highlight">{profileData.title}</div>

            <p className="hero-tagline">
              I build real-world solutions with Python, Machine Learning, and data-driven technologies.
            </p>

            <p className="hero-description">
              Passionate about developing practical applications that combine software engineering and machine learning to solve meaningful problems.
            </p>

            {/* Call to Actions */}
            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn btn-primary btn-lg"
                aria-label="Explore My Projects Section"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                href={profileData.resumePdf}
                download="Vignesh_Rahul_E_Resume.pdf"
                className="btn btn-secondary btn-lg"
                title="Download Resume PDF"
                aria-label="Download Resume"
              >
                <FileDown size={18} aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-secondary-links">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-text-link"
                aria-label="Connect with Vignesh Rahul E. on LinkedIn (opens in new tab)"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
              <span>•</span>
              <a
                href={profileData.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-text-link"
                style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}
                aria-label="View Resume in new browser tab (opens in new tab)"
              >
                <span>View Resume Tab</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="hero-visual-wrapper">
            <div className="hero-photo-container">
              <img
                src={profileData.profileImage}
                alt="Vignesh Rahul E. - Aspiring Machine Learning Engineer"
                className="hero-photo-img"
                width="340"
                height="340"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
