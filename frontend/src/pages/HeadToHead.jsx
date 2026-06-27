import { useState } from 'react';
import PlayerSelect from '../components/PlayerSelect';
import HeadToHeadCard from '../components/HeadToHeadCard';
import { getHeadToHead } from '../services/api';
import '../pages/Predict.css';

export default function HeadToHead() {
  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function handleCompare() {
    if (!playerA || !playerB) {
      setError('Select both players to view their head-to-head record.');
      return;
    }
    if (playerA === playerB) {
      setError('Choose two different players.');
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);
    try {
      const data = await getHeadToHead(playerA, playerB);
      setResult(data);
    } catch (err) {
      setError('Unable to load head-to-head record. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Head-to-Head Explorer</span>
        <h1 className="section-heading" style={{ marginTop: 12 }}>
          Compare Two Players Directly
        </h1>
        <p className="section-sub">
          View the complete head-to-head record between any two ATP players, including total
          wins and matches played.
        </p>

        <div className="predict-layout" style={{ marginTop: 40 }}>
          <div className="card predict-form">
            <div className="predict-form-title">Select Matchup</div>

            <PlayerSelect label="Player A" value={playerA} onChange={setPlayerA} exclude={playerB} />
            <div className="predict-vs-divider">VS</div>
            <PlayerSelect label="Player B" value={playerB} onChange={setPlayerB} exclude={playerA} />

            {error && <div className="predict-error">{error}</div>}

            <button className="btn btn-primary" onClick={handleCompare} disabled={loading}>
              {loading ? 'Loading...' : 'Compare Players'}
            </button>
          </div>

          <div>
            {loading && <div className="card" style={{ height: 220 }} />}

            {!loading && result && <HeadToHeadCard data={result} />}

            {!loading && !result && (
              <div className="card predict-empty">
                <div className="predict-empty-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 3l5 5-5 5M21 8H9M8 21l-5-5 5-5M3 16h12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Select two players to view their head-to-head record.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
