import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Send,
  Mail,
  Phone,
  Code2,
  Cpu,
  TrendingUp,
  Sparkles,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Sidebar({ onOpenResume, onOpenContact, onShowToast }) {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  // Mouse tracking logic for the signature kroszborg eye-tracking button
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!leftEyeRef.current) return;
      const rect = leftEyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(3.5, Math.hypot(deltaX, deltaY) / 25);

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      setPupilPos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeClick = () => {
    // Fire festive celebratory confetti
    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#f472b6']
    });
    onOpenResume();
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  return (
    <aside className="sidebar-col">
      <div className="profile-card">
        {/* Avatar with Animated Halo Ring & Online Status */}
        <div className="avatar-wrapper">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="50%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <rect width="120" height="120" fill="url(#avatarGrad)" />
                {/* Stylized Avatar Silhouette */}
                <circle cx="60" cy="46" r="23" fill="#1e293b" stroke="url(#neonGlow)" strokeWidth="2.5" />
                <path
                  d="M24 106 C24 82, 40 76, 60 76 C80 76, 96 82, 96 106 Z"
                  fill="#1e293b"
                  stroke="url(#neonGlow)"
                  strokeWidth="2"
                />
                {/* Tech glasses & monogram badge */}
                <rect x="44" y="42" width="14" height="9" rx="2" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <rect x="62" y="42" width="14" height="9" rx="2" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <line x1="58" y1="46" x2="62" y2="46" stroke="#38bdf8" strokeWidth="2" />
                <text x="60" y="96" fill="#38bdf8" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="1">
                  JA
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div>
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>
        </div>

        {/* Name & Titles */}
        <div className="profile-name-block">
          <h1 className="profile-name">{PERSONAL_INFO.name}</h1>
          <p className="profile-title">{PERSONAL_INFO.title}</p>
          <div className="profile-location">
            <MapPin size={13} />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Bio with Inline Interactive Skill Badges (Kroszborg Style) */}
        <p className="profile-bio">
          I build production-grade AI systems, hybrid rules + LLM pipelines, and data-intensive applications using{' '}
          <span className="bio-pill">
            <Code2 className="bio-pill-icon" style={{ color: '#38bdf8' }} />
            Python
          </span>
          ,{' '}
          <span className="bio-pill">
            <Cpu className="bio-pill-icon" style={{ color: '#3b82f6' }} />
            TypeScript
          </span>
          ,{' '}
          <span className="bio-pill">
            <Sparkles className="bio-pill-icon" style={{ color: '#06b6d4' }} />
            React
          </span>
          , and{' '}
          <span className="bio-pill">
            <TrendingUp className="bio-pill-icon" style={{ color: '#10b981' }} />
            Prophet & ARIMA
          </span>
          . Systems Engineering graduate from <strong>University of Lagos</strong> passionate about turning large, messy datasets into evidence-backed insights.
        </p>

        {/* Action Buttons: Signature Resume Eye Button & Get in touch */}
        <div className="action-buttons-group">
          <button className="resume-btn" onClick={handleResumeClick} title="View & Download Resume">
            <FileText size={16} style={{ color: '#38bdf8' }} />
            <span>Resume</span>
            <div className="eyes-container" ref={leftEyeRef}>
              <div className="eye-outer">
                <div
                  className="eye-pupil"
                  style={{
                    transform: `translate(calc(-50% + ${pupilPos.x}px), calc(-50% + ${pupilPos.y}px))`
                  }}
                />
              </div>
              <div className="eye-outer" ref={rightEyeRef}>
                <div
                  className="eye-pupil"
                  style={{
                    transform: `translate(calc(-50% + ${pupilPos.x}px), calc(-50% + ${pupilPos.y}px))`
                  }}
                />
              </div>
            </div>
          </button>

          <button className="primary-cta-btn" onClick={onOpenContact}>
            <Send size={15} />
            <span>Get in touch</span>
          </button>
        </div>

        {/* Social Icons with Tooltips */}
        <div className="social-links-row">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            data-tooltip="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            data-tooltip="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="social-icon-btn"
            data-tooltip="Send Email"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'Phone number')}
            className="social-icon-btn"
            data-tooltip="Copy Phone (+234)"
          >
            <Phone size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
