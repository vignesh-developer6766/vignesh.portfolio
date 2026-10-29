import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Allows Netlify Forms to process or fallback to mailto
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    // Window opens email client directly ensuring messages are never lost
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section className="section section-subtle" id="contact" aria-label="Contact and Outreach">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Build Something Meaningful</h2>
          <p className="section-subtitle">
            I'm interested in Machine Learning opportunities and projects where I can apply my Python and AI/ML knowledge to solve real-world problems.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Details & Quick Actions */}
          <div className="contact-info-col">
            <h3>Start a Conversation</h3>
            <p>
              Whether you have an entry-level opportunity, internship opening, or want to discuss machine learning applications, feel free to reach out directly.
            </p>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-item-row">
                <div className="contact-icon-box" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${profileData.email}`} className="contact-value">
                    {profileData.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item-row">
                <div className="contact-icon-box" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${profileData.phone.replace(/\s+/g, '')}`} className="contact-value">
                    {profileData.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item-row">
                <div className="contact-icon-box" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{profileData.location}</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item-row">
                <div className="contact-icon-box" aria-hidden="true">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    Vignesh Rahul E. Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="contact-action-buttons">
              <a
                href={`mailto:${profileData.email}`}
                className="btn btn-primary"
                aria-label="Send email directly via mail application"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Email Me</span>
              </a>

              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="btn btn-secondary"
                aria-label="Call directly"
              >
                <Phone size={16} aria-hidden="true" />
                <span>Call Me</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin size={16} aria-hidden="true" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-card">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-dark-navy)' }}>
              Send a Direct Message
            </h4>

            {submitted ? (
              <div className="form-feedback success" role="alert">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={18} />
                  <span>Opening your email client...</span>
                </div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.84rem' }}>
                  If your email client didn't launch automatically, please send a message directly to <strong>{profileData.email}</strong>.
                </p>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input"
                    placeholder="e.g. Machine Learning Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-textarea"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                >
                  <Send size={16} aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
