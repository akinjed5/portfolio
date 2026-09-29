import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="section-badge">{project.category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>•</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{project.tag}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px', color: '#fff' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)' }}>{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="social-icon-btn"
            style={{ width: '32px', height: '32px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scroll">
          {/* Key Metrics */}
          <div className="project-metrics-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {project.metrics.map((m, idx) => (
              <div key={idx} className="project-metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div>
            <h4 className="exp-section-subtitle">System Overview</h4>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#cbd5e1' }}>
              {project.summary}
            </p>
          </div>

          {/* Architectural Deep-Dive */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(239, 68, 68, 0.06)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                <AlertCircle size={16} />
                <span>The Core Engineering Problem</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                {project.architectureDetails.problem}
              </p>
            </div>

            <div style={{
              background: 'rgba(56, 189, 248, 0.06)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                <Sparkles size={16} />
                <span>The Architectural Solution</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                {project.architectureDetails.solution}
              </p>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.06)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '0.88rem', marginBottom: '6px' }}>
                <CheckCircle2 size={16} />
                <span>Measured Outcomes & Impact</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                {project.architectureDetails.results}
              </p>
            </div>
          </div>

          {/* Full Tech Stack */}
          <div>
            <h4 className="exp-section-subtitle">Full Stack & Libraries</h4>
            <div className="exp-tech-tags">
              {project.technologies.map((t) => (
                <span key={t} className="tech-tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px', justifyContent: 'flex-end' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
                style={{ fontSize: '0.85rem' }}
              >
                <GithubIcon size={15} />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-cta-btn"
                style={{ fontSize: '0.85rem' }}
              >
                <ExternalLink size={15} />
                <span>Open Project</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
