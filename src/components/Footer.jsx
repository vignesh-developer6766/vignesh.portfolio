import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h4>
              <span className="nav-logo-icon" style={{ width: '26px', height: '26px', fontSize: '0.875rem' }}>V</span>
              <span>vignesh<span style={{ color: 'var(--color-primary)' }}>.ai</span></span>
            </h4>
            <p>
              Aspiring Machine Learning Engineer building practical, data-driven applications that solve meaningful real-world problems.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h5 className="footer-col-title">Navigation</h5>
            <ul className="footer-links-list">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#education">Education</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          {/* Profiles & Connect Column */}
          <div className="footer-links-col">
            <h5 className="footer-col-title">Connect Online</h5>
            <ul className="footer-links-list">
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Github size={15} aria-hidden="true" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Linkedin size={15} aria-hidden="true" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={15} aria-hidden="true" />
                  <span>{profileData.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom-row">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>

          <div>
            Built with React, Vite &amp; Modern Semantic Web Standards.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ color: '#ffffff', borderColor: '#334155', backgroundColor: '#1e293b' }}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
