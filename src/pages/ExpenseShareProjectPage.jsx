import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Brain, 
  ScanLine, 
  Network, 
  Database, 
  Server, 
  CheckCircle2, 
  Lightbulb, 
  Layers 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ExpenseShareProjectPage() {
  const project = profileData.featuredProjects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-view" role="main">
      {/* Top Banner / Hero */}
      <section className="project-detail-hero">
        <div className="container">
          <Link to="/#projects" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Projects</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
            <span className="project-badge" style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)', borderColor: '#3b82f6', color: '#bfdbfe' }}>
              {project.badge}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{project.category}</span>
          </div>

          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.description}</p>

          <div className="project-detail-cta-row">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label={`Open live demonstration for ${project.title} (opens in a new tab)`}
            >
              <span>Explore Live Demo</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>

            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#ffffff' }}
              aria-label={`View ${project.title} repository on GitHub (opens in a new tab)`}
            >
              <Github size={16} aria-hidden="true" />
              <span>Verified Source Code</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Technical Content Blocks */}
      <div className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          
          {/* 1. Problem Statement & Solution */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <Lightbulb size={24} color="#2563eb" aria-hidden="true" />
              <span>Problem Statement &amp; Solution</span>
            </h2>

            <div className="detail-card-panel">
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', color: 'var(--color-dark-navy)', marginBottom: '0.5rem' }}>
                  The Problem
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.problemStatement}
                </p>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', color: 'var(--color-dark-navy)', marginBottom: '0.5rem' }}>
                  The Engineering Solution
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Machine Learning Workflow */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <Brain size={24} color="#7c3aed" aria-hidden="true" />
              <span>Machine Learning Workflow &amp; NLP Pipeline</span>
            </h2>

            <div className="detail-card-panel">
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                To reduce manual tagging overhead for recurring shared bills, ExpenseShare AI incorporates a Scikit-learn classification pipeline trained to predict transaction categories directly from text descriptions:
              </p>

              {/* Sequential Flow Steps */}
              <div className="ml-workflow-steps">
                {project.mlPipeline.steps.map((step, idx) => (
                  <div className="ml-step-card" key={idx}>
                    <div className="ml-step-number">{idx + 1}</div>
                    <div className="ml-step-text">{step}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                  <strong>Classification Engine:</strong> Evaluates incoming descriptions through token n-grams and TF-IDF term weights before inferring the highest posterior probability class via a Multinomial Naive Bayes model. Supported primary categories include <em>Food, Groceries, Transport, Shopping, Utilities, Entertainment, Travel, and Rent</em>.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Optical Character Recognition (OCR) Engine */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <ScanLine size={24} color="#059669" aria-hidden="true" />
              <span>Receipt OCR &amp; Computer Vision Pipeline</span>
            </h2>

            <div className="detail-card-panel">
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {project.ocrDetails}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', color: 'var(--color-dark-navy)', fontSize: '0.9375rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Image enhancement preprocessing using PIL (contrast scaling and grayscale binarization).</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Pytesseract layout engine parsing vendor headings, itemized rows, and grand totals.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Extracted strings piped directly into the TF-IDF / Naive Bayes model for automatic expense tagging.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Graph Algorithm: Debt Simplification */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <Network size={24} color="#ea580c" aria-hidden="true" />
              <span>Debt Simplification &amp; Settlement Graph Engine</span>
            </h2>

            <div className="detail-card-panel">
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {project.debtAlgorithm}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <h5 style={{ fontWeight: 700, color: 'var(--color-dark-navy)', marginBottom: '0.35rem' }}>
                    1. Net Balance Calculation
                  </h5>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
                    Computes each participant's aggregate debt or credit: <code>Net = Total Paid - Total Share</code>.
                  </p>
                </div>

                <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <h5 style={{ fontWeight: 700, color: 'var(--color-dark-navy)', marginBottom: '0.35rem' }}>
                    2. Greedy Min-Cash-Flow Pairing
                  </h5>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
                    Iteratively pairs the maximum debtor with the maximum creditor, settling the minimum of the two balances.
                  </p>
                </div>

                <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <h5 style={{ fontWeight: 700, color: 'var(--color-dark-navy)', marginBottom: '0.35rem' }}>
                    3. Minimized Transfers
                  </h5>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
                    Eliminates cyclical intermediate payments, reducing N-person transactions from O(N²) to at most O(N).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Database & Backend Architecture */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <Database size={24} color="#0284c7" aria-hidden="true" />
              <span>Database &amp; Backend Overview</span>
            </h2>

            <div className="detail-card-panel">
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                Built on Python 3.14 and Flask utilizing the <strong>Application Factory Pattern</strong> with modular Flask Blueprints:
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {['auth', 'dashboard', 'expenses', 'groups', 'settlements', 'analytics', 'ocr', 'ai', 'users'].map((bp) => (
                  <span key={bp} className="tech-tag" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Blueprint: /{bp}
                  </span>
                ))}
              </div>

              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <strong>Data Persistence:</strong> SQLite relational schema managing foreign key relationships across users, memberships, expense records, split allocations, recurring payments, and notifications.
              </p>
            </div>
          </div>

          {/* 6. Real Application Screenshots */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <Layers size={24} color="#2563eb" aria-hidden="true" />
              <span>Application Interface &amp; Dashboards</span>
            </h2>

            <div className="screenshots-gallery-grid">
              {project.screenshots.map((s, idx) => (
                <div className="screenshot-item-card" key={idx}>
                  <div className="screenshot-img-wrap">
                    <img 
                      src={s.url} 
                      alt={`${s.title} screenshot - ${s.caption}`} 
                      loading="lazy" 
                      width="420"
                      height="220"
                    />
                  </div>
                  <div className="screenshot-caption-box">
                    <h4>{s.title}</h4>
                    <p>{s.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Challenges & Key Learnings */}
          <div className="detail-section-block">
            <h2 className="detail-block-title">
              <CheckCircle2 size={24} color="#16a34a" aria-hidden="true" />
              <span>Challenges &amp; Engineering Learnings</span>
            </h2>

            <div className="detail-card-panel">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Handling OCR Text Noise:</strong> Raw receipts often contain poor scan contrast and arbitrary vendor line formatting. Applying contrast threshold filters prior to OCR significantly boosted text extraction reliability.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Balancing Probabilistic NLP with Heuristics:</strong> Integrating domain keyword fallbacks alongside the Naive Bayes classifier created high confidence tagging for major brands (e.g. Uber, Zomato, DMart).</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Relational Integrity in Split Engines:</strong> Ensuring exact cent splitting across 4 different calculation engines (Equal, Exact, Percentage, Shares) while maintaining zero-sum consistency in settlement balances.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <Link to="/#projects" className="btn btn-primary btn-lg">
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Back to All Projects</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
