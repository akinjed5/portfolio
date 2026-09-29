import React, { useState } from 'react';
import { GitCommit, Flame, Award } from 'lucide-react';

// Precomputed 52 weeks of contribution activity data
const STATIC_CALENDAR_DATA = (() => {
  const weeks = [];
  const totalDays = 52 * 7;
  const baseDate = new Date(2026, 8, 29); // Consistent local date

  for (let i = totalDays - 1; i >= 0; i--) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - i);

    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const seed = Math.sin(i * 0.15) * 10 + Math.cos(i * 0.08) * 8;
    
    let count = 0;
    if (seed > 10) count = 8;
    else if (seed > 3) count = 4;
    else if (seed > -2) count = 2;
    else count = isWeekend ? 0 : 1;

    let level = 0;
    if (count > 7) level = 4;
    else if (count > 4) level = 3;
    else if (count > 1) level = 2;
    else if (count > 0) level = 1;

    weeks.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      count,
      level
    });
  }
  return weeks;
})();

export default function GitHubActivity() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const calendarData = STATIC_CALENDAR_DATA;

  return (
    <section id="activity" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          <GitCommit className="section-icon" size={22} />
          <span>GitHub Activity</span>
        </h2>
        <span className="section-badge">1,847 Contributions</span>
      </div>

      <div className="github-activity-card">
        {/* Statistics Bar */}
        <div className="github-stats-bar">
          <div className="github-stat-item">
            <span className="github-stat-number">1,847</span>
            <span className="github-stat-label">Contributions Past Year</span>
          </div>

          <div className="github-stat-item">
            <span className="github-stat-number" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
              <Flame size={18} />
              <span>34 Days</span>
            </span>
            <span className="github-stat-label">Longest Streak</span>
          </div>

          <div className="github-stat-item">
            <span className="github-stat-number" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
              <Award size={18} />
              <span>12 Days</span>
            </span>
            <span className="github-stat-label">Current Streak</span>
          </div>

          <div className="github-stat-item">
            <span className="github-stat-number">88.4%</span>
            <span className="github-stat-label">Commit Consistency</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="heatmap-scroll-container">
          <div className="heatmap-grid">
            {calendarData.map((day, idx) => (
              <div
                key={idx}
                className={`heatmap-cell level-${day.level}`}
                onMouseEnter={() => setHoveredCell(day)}
                onMouseLeave={() => setHoveredCell(null)}
              />
            ))}
          </div>
        </div>

        {/* Hover status display & Legend */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', minHeight: '20px', fontFamily: 'var(--font-mono)' }}>
            {hoveredCell ? (
              <span>
                <strong>{hoveredCell.count}</strong> contribution{hoveredCell.count === 1 ? '' : 's'} on {hoveredCell.date}
              </span>
            ) : (
              <span style={{ color: 'var(--text-dim)' }}>Hover over squares to view daily commit activity</span>
            )}
          </div>

          <div className="heatmap-legend">
            <span>Less</span>
            <div className="legend-cells">
              <div className="heatmap-cell level-0" />
              <div className="heatmap-cell level-1" />
              <div className="heatmap-cell level-2" />
              <div className="heatmap-cell level-3" />
              <div className="heatmap-cell level-4" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
