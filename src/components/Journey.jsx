import React, { useState } from 'react';
import { Compass, GraduationCap, Layers, Laptop } from 'lucide-react';
import { EDUCATION, JOURNEY_MILESTONES, GEARS_AND_STACK } from '../data/portfolioData';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <section id="journey" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          <Compass className="section-icon" size={22} />
          <span>Journey & Gear</span>
        </h2>
        <span className="section-badge">Milestones</span>
      </div>

      {/* Tabs */}
      <div className="journey-tab-nav">
        <button
          className={`filter-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          My Journey & Education
        </button>
        <button
          className={`filter-tab-btn ${activeTab === 'gears' ? 'active' : ''}`}
          onClick={() => setActiveTab('gears')}
        >
          Gears & Workstation
        </button>
      </div>

      {activeTab === 'timeline' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Education Spotlight */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '14px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={18} style={{ color: '#38bdf8' }} />
              <span>Academic Credentials</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="timeline-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#fff' }}>{edu.degree}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>{edu.institution}</p>
                    </div>
                    <span className="section-badge" style={{ fontSize: '0.72rem' }}>{edu.badge}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '2px' }}>{edu.period} • {edu.location}</p>
                  <p className="timeline-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Milestones */}
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} style={{ color: '#a855f7' }} />
              <span>Career & Technical Progression</span>
            </h3>

            <div className="timeline-list">
              {JOURNEY_MILESTONES.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="timeline-year">{item.year}</span>
                      <span className="section-badge" style={{ fontSize: '0.7rem' }}>{item.tag}</span>
                    </div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-subtitle">{item.subtitle}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Gears & Setup Tab */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {GEARS_AND_STACK.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <h4 className="skill-category-title" style={{ fontSize: '0.96rem' }}>
                <Laptop size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>{group.category}</span>
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {group.items.map((it, i) => (
                  <div key={i} style={{ padding: '8px 12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>{it.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>{it.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
