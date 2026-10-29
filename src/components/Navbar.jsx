import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileDown, ArrowRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Scrollspy logic on home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header" role="banner">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="nav-logo" 
          aria-label="Vignesh Rahul E. Portfolio Home"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="nav-logo-icon" aria-hidden="true">V</div>
          <span>vignesh<span className="nav-logo-accent">.ai</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = location.pathname === '/' && activeSection === sectionId;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link-item ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Action: Download Resume */}
        <div className="nav-actions">
          <a
            href={profileData.resumePdf}
            download="Vignesh_Rahul_E_Resume.pdf"
            className="btn btn-primary btn-sm"
            title="Download Vignesh Rahul E's Resume"
            aria-label="Download Resume PDF"
          >
            <FileDown size={16} aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          {/* Accessible Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="mobile-links-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="mobile-link-item"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)' }}>
          <a
            href={profileData.resumePdf}
            download="Vignesh_Rahul_E_Resume.pdf"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileDown size={18} aria-hidden="true" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
