import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '540px' }}>
        <span className="section-tag" style={{ color: '#ef4444', backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
          Error 404
        </span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-dark-navy)', marginTop: '0.75rem', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
          The page or project route you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={18} aria-hidden="true" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </main>
  );
}
