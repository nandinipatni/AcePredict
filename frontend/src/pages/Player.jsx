import { useState } from 'react';
import PlayerSelect from '../components/PlayerSelect';
import PlayerCard from '../components/PlayerCard';
import { getPlayer } from '../services/api';
import './Player.css';
import './Predict.css';

export default function Player() {
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function handleSearch() {
    if (!selected) {
      setError('Select a player to view their profile.');
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);
    try {
      const data = await getPlayer(selected);
      setResult(data);
    } catch (err) {
      setError('Unable to load player data. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Player Intelligence</span>
        <h1 className="section-heading" style={{ marginTop: 12 }}>
          Explore Player Performance
        </h1>
        <p className="section-sub">
          Search any ATP player to see current ranking, ranking points, age and most recent
          tournament activity.
        </p>

        <div className="player-search">
          <PlayerSelect label="Player" value={selected} onChange={setSelected} />
          <button className="btn btn-primary" onClick={handleSearch} disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && <div className="predict-error" style={{ marginTop: 16, maxWidth: 420 }}>{error}</div>}

        {loading && <div className="card player-result" style={{ height: 240 }} />}

        {!loading && result && (
          <div className="player-result">
            <PlayerCard player={result} />
          </div>
        )}
      </div>
    </section>
  );
}
