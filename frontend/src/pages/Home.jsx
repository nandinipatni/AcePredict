import { useEffect, useState } from 'react';
import MatchArena from '../components/MatchArena';
import { getHeadToHead, predictMatch } from '../services/api';
import './Home.css';

const FEATURED_MATCH = ['Carlos Alcaraz', 'Alexander Zverev'];

const FEATURES = [
  {
    title: 'Match Prediction Engine',
    desc: 'A machine learning model trained on ATP match history estimates win probability for any matchup.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Head-to-Head Analysis',
    desc: 'Compare two players directly with full historical results and head-to-head win counts.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 3l5 5-5 5M21 8H9M8 21l-5-5 5-5M3 16h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Player Intelligence',
    desc: 'Look up any ATP player to see current ranking, rank points, age and recent activity.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'ATP Rankings Insights',
    desc: 'Rankings and rank points feed directly into the prediction model for up-to-date forecasts.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '60K+', label: 'ATP Matches Analyzed' },
  { value: '94%', label: 'Model Coverage of Tour Players' },
  { value: '5', label: 'Years of Match Data' },
  { value: '<1s', label: 'Average Prediction Time' },
];

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(false);
      try {
        const [prediction, h2h] = await Promise.all([
          predictMatch(...FEATURED_MATCH),
          getHeadToHead(...FEATURED_MATCH).catch(() => null),
        ]);
        if (!cancelled) {
          setData({ ...prediction, head_to_head: h2h });
        }
      } catch (err) {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <MatchArena data={data} loading={loading} error={error} />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Platform</span>
          <h2 className="section-heading" style={{ marginTop: 12 }}>
            Predict ATP Matches With Data, Not Guesswork
          </h2>
          <p className="section-sub">
            AcePredict combines machine learning, ATP rankings, player statistics and historical
            match data to forecast tennis match outcomes.
          </p>

          <div className="features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="card feature-card">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
