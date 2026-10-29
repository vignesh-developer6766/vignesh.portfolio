import React from 'react';
import { ArrowRight, FileDown, ExternalLink, Sparkles, Terminal, Cpu } from 'lucide-react';
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

          {/* Right Column: Profile Image & Tech Labels */}
          <div className="hero-visual-wrapper">
            <div className="hero-photo-container">
              <div className="hero-photo-inner">
                <img
                  src={profileData.profileImage}
                  alt="Vignesh Rahul E. - Aspiring Machine Learning Engineer"
                  className="hero-photo-img"
                  width="320"
                  height="320"
                  fetchPriority="high"
                />
              </div>

              {/* Floating Tech Chips */}
              <div className="hero-tech-badge hero-tech-badge-1" aria-hidden="true">
                <Terminal size={16} color="#2563eb" />
                <span>Python</span>
              </div>

              <div className="hero-tech-badge hero-tech-badge-2" aria-hidden="true">
                <Sparkles size={16} color="#7c3aed" />
                <span>Machine Learning</span>
              </div>

              <div className="hero-tech-badge hero-tech-badge-3" aria-hidden="true">
                <Cpu size={16} color="#059669" />
                <span>Scikit-learn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
