import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Check, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Projects() {
  const primaryProject = profileData.featuredProjects[0];
  const secondaryProjects = profileData.featuredProjects.slice(1);

  return (
    <section className="section section-subtle" id="projects" aria-label="Machine Learning Projects Showcase">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Practical software applications demonstrating machine learning pipelines, Python backend engineering, and clean UX.
          </p>
        </div>

        <div className="projects-container">
          {/* PRIMARY FEATURED PROJECT: ExpenseShare AI */}
          <article className="featured-project-card" aria-label={`Project: ${primaryProject.title}`}>
            <div className="project-card-media">
              <img
                src={primaryProject.thumbnail}
                alt={`${primaryProject.title} dashboard interface showing analytics and expense splits`}
                className="project-card-img"
                loading="lazy"
                width="640"
                height="380"
              />
            </div>

            <div className="project-card-content">
              <div>
                <div className="project-meta-top">
                  <span className="project-badge">
                    <Sparkles size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {primaryProject.badge}
                  </span>
                  <span className="project-num">Project {primaryProject.number}</span>
                </div>

                <h3 className="project-title">{primaryProject.title}</h3>
                <p className="project-category">{primaryProject.category}</p>
                <p className="project-description">{primaryProject.description}</p>

                {/* Key Features Bullet List */}
                <ul className="project-features-list">
                  {primaryProject.keyFeatures.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="project-feature-item">
                      <Check size={16} className="project-feature-bullet" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="project-tech-tags">
                  {primaryProject.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={primaryProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  aria-label={`Open live demo for ${primaryProject.title} (opens in a new tab)`}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>

                <a
                  href={primaryProject.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label={`View source code for ${primaryProject.title} on GitHub (opens in a new tab)`}
                >
                  <Github size={15} aria-hidden="true" />
                  <span>Source Code</span>
                </a>

                <Link
                  to={primaryProject.detailRoute}
                  className="btn btn-secondary btn-sm"
                  aria-label={`Read technical architecture details for ${primaryProject.title}`}
                >
                  <span>Technical Details</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          {/* SECONDARY PROJECTS */}
          <div className="secondary-projects-grid">
            {secondaryProjects.map((proj) => (
              <article className="secondary-project-card" key={proj.id} aria-label={`Project: ${proj.title}`}>
                <div>
                  <div className="project-meta-top">
                    <span className="project-badge">{proj.badge}</span>
                    <span className="project-num">Project {proj.number}</span>
                  </div>

                  <h3 className="project-title" style={{ fontSize: '1.35rem' }}>{proj.title}</h3>
                  <p className="project-category">{proj.category}</p>
                  <p className="project-description">{proj.description}</p>

                  <ul className="project-features-list">
                    {proj.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={15} className="project-feature-bullet" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech-tags">
                    {proj.technologies.map((t) => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions" style={{ marginTop: '1.25rem' }}>
                  <a
                    href={proj.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`View ${proj.title} code profile on GitHub`}
                  >
                    <Github size={15} aria-hidden="true" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
