import React from 'react';
import { User, Code2, Bot, Database, Wrench } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export default function About() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code2 size={18} style={{ color: '#38bdf8' }} />;
      case 'LLMs & Generative AI':
        return <Bot size={18} style={{ color: '#a855f7' }} />;
      case 'Data Science & ML':
        return <Database size={18} style={{ color: '#10b981' }} />;
      default:
        return <Wrench size={18} style={{ color: '#f59e0b' }} />;
    }
  };

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          <User className="section-icon" size={22} />
          <span>About & Engineering Philosophy</span>
        </h2>
        <span className="section-badge">Systems Mindset</span>
      </div>

      <div className="about-content">
        {/* Narrative Card */}
        <div className="about-text-card">
          <p>
            I am a <strong>Systems Engineering graduate</strong> and software engineer currently at{' '}
            <strong style={{ color: '#38bdf8' }}>Vester</strong>, an AI Accelerator platform. My work centers on the intersection of deterministic software engineering and non-deterministic artificial intelligence — designing systems where uncertainty is handled with rigor and transparency.
          </p>
          <p>
            At Vester, I engineered a <strong>hybrid rules + LLM classification pipeline</strong> that categorized over 42,000 early-stage ventures across complex business-model axes. Rather than treating language models as black-box oracles, I built confidence gating, evidence hierarchy rules, and verbatim citation enforcement that yielded an <strong>87% agreement rate with 200 double-blind human labels</strong>, while pruning over 65% of unnecessary API spending.
          </p>
          <p>
            Whether serving <strong>Prophet and ARIMA time-series models</strong> through Flask backends, deploying and benchmarking open-weight LLMs (Gemma, Qwen) on consumer GPUs, or writing strictly-typed React and TypeScript dashboards for tens of thousands of venture applications, I prioritize <em>measuring model quality honestly</em> and turning messy data into dependable production code.
          </p>
        </div>

        {/* Technical Skills Matrix */}
        <div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '14px', color: '#fff' }}>
            Technical Competencies Matrix
          </h3>

          <div className="skills-matrix">
            {TECHNICAL_SKILLS.map((group) => (
              <div key={group.category} className="skill-category-card">
                <div className="skill-category-title">
                  {getCategoryIcon(group.category)}
                  <span>{group.category}</span>
                </div>
                <div className="skill-pills-wrap">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
