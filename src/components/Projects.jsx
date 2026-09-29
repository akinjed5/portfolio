import React, { useState } from 'react';
import { Layers, ExternalLink, ArrowRight, Activity, Cpu, Sparkles, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & ML', 'Data Science', 'Full Stack'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getIconForProject = (id) => {
    switch (id) {
      case 'vester-pipeline':
        return <Cpu size={24} style={{ color: '#38bdf8' }} />;
      case 'invenforecast':
        return <TrendingUp size={24} style={{ color: '#10b981' }} />;
      case 'local-llm-benchmarking':
        return <Sparkles size={24} style={{ color: '#a855f7' }} />;
      default:
        return <Activity size={24} style={{ color: '#f59e0b' }} />;
    }
  };

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          <Layers className="section-icon" size={22} />
          <span>Featured Projects</span>
        </h2>
        <span className="section-badge">{PROJECTS.length} Systems</span>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs-row">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            {/* Visual Header Mockup */}
            <div className="project-banner">
              <div className="project-banner-decor" />
              <div className="project-banner-badge">{project.tag}</div>

              <div className="project-banner-center">
                <div className="project-mock-badge">
                  {getIconForProject(project.id)}
                  <span>{project.title}</span>
                </div>
              </div>
            </div>

            {/* Project Content Body */}
            <div className="project-body">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <p className="project-description">{project.description}</p>

              {/* Key Quantitative Metrics */}
              <div className="project-metrics-row">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="project-metric-item">
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Pills */}
              <div className="exp-tech-tags" style={{ marginTop: 'auto' }}>
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-tag-pill" style={{ fontSize: '0.74rem' }}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag-pill" style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Footer with Case Study Action & Links */}
              <div className="project-footer">
                <button
                  className="project-details-btn"
                  onClick={() => onSelectProject(project)}
                >
                  <span>Case Study & Architecture</span>
                  <ArrowRight size={13} />
                </button>

                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon-btn"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon-btn"
                      title="Visit Live Application"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
