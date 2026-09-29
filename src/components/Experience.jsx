import React, { useState } from 'react';
import { Briefcase, ChevronDown, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  // By default, open the first item (Vester)
  const [expandedIds, setExpandedIds] = useState(['vester']);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCompanyInitial = (name) => {
    return name.charAt(0);
  };

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          <Briefcase className="section-icon" size={22} />
          <span>Work Experience</span>
        </h2>
        <span className="section-badge">{EXPERIENCES.length} Roles</span>
      </div>

      <div className="experience-list">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedIds.includes(exp.id);

          return (
            <article key={exp.id} className="exp-card">
              <div className="exp-card-header" onClick={() => toggleExpand(exp.id)}>
                <div className="exp-left">
                  <div className="exp-company-logo">
                    {getCompanyInitial(exp.company)}
                  </div>
                  <div className="exp-title-block">
                    <div className="exp-company-name-row">
                      <h3 className="exp-company-name">{exp.company}</h3>
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-ext-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Visit Company Website"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {exp.featuredBadge && (
                        <span className="section-badge" style={{ fontSize: '0.7rem', padding: '2px 6px' }}>
                          {exp.featuredBadge}
                        </span>
                      )}
                    </div>
                    <p className="exp-role">{exp.role}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'space-between' }}>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className={`exp-toggle-icon ${isExpanded ? 'expanded' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              {/* Collapsible Details Drawer */}
              {isExpanded && (
                <div className="exp-details">
                  {/* Technologies & Tools */}
                  <div>
                    <h4 className="exp-section-subtitle">Technologies & Tools</h4>
                    <div className="exp-tech-tags">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div>
                    <h4 className="exp-section-subtitle">Key Contributions & Results</h4>
                    <ul className="exp-bullet-list">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx} className="exp-bullet-item">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: point
                                .replace(/(42,396 startups|87% agreement|12,000\+ unresolved startups|30,000\+ venture applications|14%|40 weighted text signals|CreditShare)/g, '<strong>$1</strong>')
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
