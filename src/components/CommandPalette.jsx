import React, { useState, useEffect, useRef } from 'react';
import { Search, Briefcase, Layers, User, Compass, FileText, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenResume, onOpenContact, onShowToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'work',
      title: 'Navigate to Work Experience',
      category: 'Navigation',
      icon: <Briefcase size={16} />,
      run: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'projects',
      title: 'Navigate to Projects',
      category: 'Navigation',
      icon: <Layers size={16} />,
      run: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'about',
      title: 'Navigate to About & Skills',
      category: 'Navigation',
      icon: <User size={16} />,
      run: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'journey',
      title: 'Navigate to Journey & Education',
      category: 'Navigation',
      icon: <Compass size={16} />,
      run: () => {
        document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'resume',
      title: 'View & Download Resume',
      category: 'Actions',
      icon: <FileText size={16} />,
      run: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'contact',
      title: 'Get in Touch / Message',
      category: 'Actions',
      icon: <Mail size={16} />,
      run: () => {
        onClose();
        onOpenContact();
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Actions',
      icon: <Mail size={16} />,
      run: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onShowToast('Copied email to clipboard!');
        onClose();
      }
    },
    {
      id: 'copy-phone',
      title: `Copy Phone (${PERSONAL_INFO.phone})`,
      category: 'Actions',
      icon: <Phone size={16} />,
      run: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.phone);
        onShowToast('Copied phone number to clipboard!');
        onClose();
      }
    },
    {
      id: 'open-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Links',
      icon: <ExternalLink size={16} />,
      run: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'open-github',
      title: 'Open GitHub Profile',
      category: 'Links',
      icon: <ExternalLink size={16} />,
      run: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        setSelectedIndex(0);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          document.querySelector('.nav-search-btn')?.click();
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].run();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="command-modal" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Row */}
        <div className="command-input-row">
          <Search size={18} style={{ color: 'var(--text-dim)' }} />
          <input
            ref={inputRef}
            className="command-input"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <span className="command-shortcut">ESC</span>
        </div>

        {/* Action List */}
        <div className="command-list">
          {filteredActions.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.88rem' }}>
              No commands found matching "{query}"
            </div>
          ) : (
            filteredActions.map((act, idx) => (
              <div
                key={act.id}
                className={`command-item ${idx === selectedIndex ? 'focused' : ''}`}
                onClick={act.run}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="command-item-left">
                  <span style={{ color: idx === selectedIndex ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
                    {act.icon}
                  </span>
                  <span>{act.title}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="command-shortcut">{act.category}</span>
                  {idx === selectedIndex && <ArrowRight size={14} style={{ color: 'var(--accent-cyan)' }} />}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
