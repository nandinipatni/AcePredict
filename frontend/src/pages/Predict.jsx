import { useEffect, useState } from 'react';
import PlayerSelect from '../components/PlayerSelect';
import PredictionCard from '../components/PredictionCard';
import { predictMatch } from '../services/api';
import './Predict.css';

const ANALYSIS_STEPS = [
  'Analyzing ATP rankings...',
  'Analyzing ranking points...',
  'Analyzing player experience...',
  'Generating prediction...',
];

export default function Predict() {
  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!loading) return;
    setStepIndex(0);
    const interval = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, ANALYSIS_STEPS.length - 1));
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  async function handlePredict() {
    if (!playerA || !playerB) {
      setError('Select both players to run a prediction.');
      return;
    }
    if (playerA === playerB) {
      setError('Choose two different players.');
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);

    const start = Date.now();
    try {
      const data = await predictMatch(playerA, playerB);
      const elapsed = Date.now() - start;
      const minDuration = 1800;
      if (elapsed < minDuration) {
        await new Promise((r) => setTimeout(r, minDuration - elapsed));
      }
      setResult(data);
    } catch (err) {
      setError('Unable to generate a prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Prediction Center</span>
        <h1 className="section-heading" style={{ marginTop: 12 }}>
          Predict ATP Matches With Data, Not Guesswork
        </h1>
        <p className="section-sub">
          Select two players to generate a win probability, confidence score and prediction
          summary powered by the AcePredict model.
        </p>

        <div className="predict-layout" style={{ marginTop: 40 }}>
          <div className="card predict-form">
            <div className="predict-form-title">Select Matchup</div>

            <PlayerSelect label="Player A" value={playerA} onChange={setPlayerA} exclude={playerB} />
            <div className="predict-vs-divider">VS</div>
            <PlayerSelect label="Player B" value={playerB} onChange={setPlayerB} exclude={playerA} />

            {error && <div className="predict-error">{error}</div>}

            <button className="btn btn-primary" onClick={handlePredict} disabled={loading}>
              {loading ? 'Analyzing Match...' : 'Predict Match'}
            </button>
          </div>

          <div>
            {loading && (
              <div className="card predict-loading">
                <div className="predict-loading-steps">
                  {ANALYSIS_STEPS.map((step, i) => (
                    <div key={step} className={`step ${i === stepIndex ? 'active' : ''}`}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!loading && result && <PredictionCard data={result} />}

            {!loading && !result && (
              <div className="card predict-empty">
                <div className="predict-empty-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p>Select two players and run a prediction to see results here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
