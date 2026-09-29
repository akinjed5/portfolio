import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenCommand }) {
  const [activeSection, setActiveSection] = useState('experience');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['experience', 'projects', 'about', 'journey'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nav-container" style={{
      boxShadow: scrolled ? '0 14px 34px -10px rgba(0, 0, 0, 0.65)' : 'var(--shadow-nav)'
    }}>
      {/* Brand */}
      <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <div className="nav-logo-badge">JA</div>
        <span>{PERSONAL_INFO.shortName}</span>
      </a>

      {/* Nav Links */}
      <nav className="nav-links">
        <button
          className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => scrollToSection('experience')}
        >
          Work
        </button>
        <button
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
        <button
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => scrollToSection('about')}
        >
          About
        </button>
        <button
          className={`nav-link ${activeSection === 'journey' ? 'active' : ''}`}
          onClick={() => scrollToSection('journey')}
        >
          Journey
        </button>
      </nav>

      {/* Actions */}
      <div className="nav-actions">
        <button
          className="nav-search-btn"
          onClick={onOpenCommand}
          title="Search anything (Ctrl + K)"
        >
          <Search size={14} />
          <span style={{ display: 'none', '@media (minWidth: 480px)': { display: 'inline' } }}>Search</span>
          <span className="nav-search-kbd">⌘K</span>
        </button>
      </div>
    </header>
  );
}
