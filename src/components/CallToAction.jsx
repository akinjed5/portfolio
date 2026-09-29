import React from 'react';
import { Mail, Phone, FileText, ArrowUp, Send } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CallToAction({ onOpenResume, onOpenContact, onShowToast }) {
  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    onShowToast('Copied phone number to clipboard!');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section-container" style={{ borderBottom: 'none', paddingBottom: 0 }}>
      {/* Banner */}
      <div className="cta-banner">
        <h2 className="cta-heading">Hey, you scrolled this far, let's talk.</h2>
        <p className="cta-subtext">
          Whether you need a hybrid rules + LLM classification system, robust predictive time-series modeling, or high-performance React/TypeScript dashboards — I'm open to discussing new opportunities.
        </p>

        <div className="cta-buttons">
          <button className="primary-cta-btn" onClick={onOpenContact}>
            <Send size={15} />
            <span>Get in Touch</span>
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="resume-btn"
            style={{ fontSize: '0.88rem' }}
          >
            <Mail size={15} style={{ color: '#38bdf8' }} />
            <span>Email Directly</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            style={{ fontSize: '0.88rem' }}
          >
            <LinkedinIcon size={15} style={{ color: '#60a5fa' }} />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={copyPhone}
            className="resume-btn"
            style={{ fontSize: '0.88rem' }}
          >
            <Phone size={15} style={{ color: '#34d399' }} />
            <span>{PERSONAL_INFO.phone}</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-block">
        <div>
          <span>Design & Engineered for <strong>{PERSONAL_INFO.name}</strong> © 2026.</span>
          <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '2px', color: 'var(--text-dim)' }}>
            Systems Engineering • University of Lagos
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onOpenResume}
            style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>

          <button
            onClick={scrollToTop}
            style={{
              fontSize: '0.82rem',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </footer>
    </section>
  );
}
