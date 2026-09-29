import React, { useState } from 'react';
import { X, Mail, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all fields.');
      return;
    }

    setSubmitted(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    onShowToast('Thank you! Message prepared.');

    // Also open mail client as direct fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onShowToast('Copied email to clipboard!');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    onShowToast('Copied phone number to clipboard!');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-card" style={{ maxWidth: '540px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>Get in Touch</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)' }}>Let's build something ambitious together</p>
          </div>
          <button onClick={onClose} className="social-icon-btn" style={{ width: '32px', height: '32px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body-scroll" style={{ gap: '20px' }}>
          {/* Direct channels row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <button
              onClick={copyEmail}
              className="skill-category-card"
              style={{ textAlign: 'left', padding: '12px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                <Mail size={13} style={{ color: '#38bdf8' }} />
                <span>Email Address</span>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginTop: '2px', wordBreak: 'break-all' }}>
                {PERSONAL_INFO.email}
              </div>
            </button>

            <button
              onClick={copyPhone}
              className="skill-category-card"
              style={{ textAlign: 'left', padding: '12px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                <Phone size={13} style={{ color: '#34d399' }} />
                <span>Phone / WhatsApp</span>
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginTop: '2px' }}>
                {PERSONAL_INFO.phone}
              </div>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                Your Name
              </label>
              <input
                required
                className="assistant-input"
                style={{ width: '100%', borderRadius: '10px' }}
                placeholder="Ada Lovelace"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                Your Email
              </label>
              <input
                required
                type="email"
                className="assistant-input"
                style={{ width: '100%', borderRadius: '10px' }}
                placeholder="ada@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                className="assistant-input"
                style={{ width: '100%', borderRadius: '10px', resize: 'vertical', fontFamily: 'inherit' }}
                placeholder="Hi Jedidiah, we're looking for an engineer to lead our ML classification / React platform..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="primary-cta-btn" style={{ justifyContent: 'center', padding: '10px' }}>
              <Send size={15} />
              <span>Send Message</span>
            </button>
          </form>

          {/* Quick LinkedIn link */}
          <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-dim)', paddingTop: '8px' }}>
            Prefer LinkedIn? Connect at{' '}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}
            >
              linkedin.com/in/jedidiah-akindele
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
