import React from 'react';
import { X, Printer, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyResumePlainText = () => {
    const text = `
JEDIDIAH AKINDELE
Lagos, Nigeria | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.linkedin}

SUMMARY
${PERSONAL_INFO.bio}

TECHNICAL SKILLS
- Languages: Python, SQL, TypeScript, JavaScript (ES6+), HTML5, CSS3
- LLMs & Generative AI: LLM APIs, prompt engineering, structured extraction, evaluation against human labels, Ollama, LM Studio, Gemma, Qwen
- Data Science & ML: Pandas, NumPy, scikit-learn, Prophet, ARIMA, time-series forecasting, text classification, regex/NLP rules, feature engineering, EDA
- Engineering & Tools: Flask, Node.js, Express, React, MongoDB, REST APIs, web scraping, Matplotlib, Seaborn, Git/GitHub, Linux

EXPERIENCE
Full Stack Engineer, Vester (AI Accelerator Platform) (11/2024 – Present · Remote)
• Designed a two-stage rules + LLM classification pipeline that labelled 42,396 startups on two business-model axes...
• Built a rules engine of ~40 weighted text signals with confidence gating...
• Ran an LLM gap-filling pass over 12,000+ unresolved startups, reaching 87% agreement with 200 human-coded labels...
• Engineered the LLM pass for scale and cost control...
• Built data-intensive React/TypeScript intake and analytics dashboards for 30,000+ venture applications...

Data Scientist Trainee, New Horizons Computer Learning Centers (05/2022 – 10/2023 · Lagos)
Freelance Software Developer (01/2020 – Present · Remote)
Technical Writer (Freelance) (12/2020 – Present · Remote)

EDUCATION
B.Sc. Systems Engineering, University of Lagos (11/2019 – 08/2026 · Lagos)
Diploma in Systems Engineering, University of Lagos (08/2019 · Lagos)
    `.trim();

    navigator.clipboard.writeText(text);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
    onShowToast('Resume plain text copied to clipboard!');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-card" style={{ maxWidth: '780px', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="nav-logo-badge" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>JA</div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>Jedidiah Akindele — Resume</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Full Stack & AI Systems Engineer</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={copyResumePlainText}
              className="resume-btn"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
              title="Copy plain text format"
            >
              <Copy size={13} />
              <span>Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="primary-cta-btn"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              title="Print or Save as PDF"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="social-icon-btn"
              style={{ width: '32px', height: '32px' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Paper-Style Resume View */}
        <div className="modal-body-scroll" style={{ background: '#0e111a', padding: '32px' }}>
          {/* Header block */}
          <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '18px' }}>
            <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              Jedidiah Akindele
            </h1>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Lagos, Nigeria • {PERSONAL_INFO.phone} • {PERSONAL_INFO.email} •{' '}
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>
                linkedin.com/in/jedidiah-akindele-3071061b0
              </a>
            </p>
          </div>

          {/* Summary */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Summary
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#cbd5e1' }}>
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
              <div>
                <strong style={{ color: '#fff' }}>Languages: </strong>
                <span style={{ color: '#cbd5e1' }}>Python, SQL, TypeScript, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>LLMs & Generative AI: </strong>
                <span style={{ color: '#cbd5e1' }}>LLM APIs, prompt engineering, structured extraction, evaluation against human labels, Ollama, LM Studio, Gemma, Qwen</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Data Science & ML: </strong>
                <span style={{ color: '#cbd5e1' }}>Pandas, NumPy, scikit-learn, Prophet, ARIMA, time-series forecasting, text classification, regex/NLP rules, feature engineering, EDA</span>
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Engineering & Tools: </strong>
                <span style={{ color: '#cbd5e1' }}>Flask, Node.js, Express, React, MongoDB, REST APIs, web scraping, Matplotlib, Seaborn, Git/GitHub, Linux</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem', color: '#fff' }}>
                      {exp.role}, <span style={{ color: 'var(--accent-cyan)' }}>{exp.company}</span>
                      {exp.subCompany && <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}> ({exp.subCompany})</span>}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                  <ul style={{ paddingLeft: '18px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Selected Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>
                      {proj.title}: <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{proj.subtitle}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {proj.technologies.slice(0, 3).join(' • ')}
                    </div>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#cbd5e1', marginTop: '4px', lineHeight: 1.55 }}>
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{edu.degree}</span>,{' '}
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{edu.institution}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {edu.period} • {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
