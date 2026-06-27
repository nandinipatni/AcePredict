import './MatchArena.css';
import ProbabilityBar from './ProbabilityBar';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function MatchArena({ data, loading, error }) {
  if (loading) {
    return (
      <section className="arena">
        <div className="container">
          <div className="arena-skeleton skeleton" />
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="arena">
        <div className="container">
          <div className="card" style={{ padding: 48, textAlign: 'center' }}>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Live prediction unavailable. The API may be offline — check back shortly or run a
              prediction manually on the Predictions page.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const {
    player_a,
    player_b,
    player_a_probability,
    player_b_probability,
    confidence,
    head_to_head,
  } = data;

  const aIsWinner = player_a_probability >= player_b_probability;

  return (
    <section className="arena">
      <div className="container">
        <div className="arena-eyebrow-row">
          <span className="dot" />
          <span className="eyebrow">Today's Featured Prediction</span>
        </div>

        <div className="arena-grid">
          <div className={`arena-player ${aIsWinner ? 'winner' : 'loser'}`}>
            <span className="arena-tag">{aIsWinner ? 'Predicted Winner' : 'Underdog'}</span>
            <div className="arena-avatar">{initials(player_a)}</div>
            <div className="arena-name">{player_a}</div>
            <div className="arena-prob">{player_a_probability.toFixed(1)}%</div>
          </div>

          <div className="arena-center">
            <div className="arena-vs">VS</div>
            <div className="arena-meta">
              {head_to_head && (
                <div className="arena-meta-row">
                  Head-to-Head: {head_to_head.player_a_wins} — {head_to_head.player_b_wins}
                </div>
              )}
              <div className="arena-confidence">Confidence: {confidence}</div>
            </div>
          </div>

          <div className={`arena-player ${!aIsWinner ? 'winner' : 'loser'}`}>
            <span className="arena-tag">{!aIsWinner ? 'Predicted Winner' : 'Underdog'}</span>
            <div className="arena-avatar">{initials(player_b)}</div>
            <div className="arena-name">{player_b}</div>
            <div className="arena-prob">{player_b_probability.toFixed(1)}%</div>
          </div>
        </div>

        <div className="arena-bar-row">
          <ProbabilityBar
            playerA={player_a}
            playerB={player_b}
            probabilityA={player_a_probability}
            probabilityB={player_b_probability}
          />
        </div>

        <div className="arena-footer-actions">
          <a href="/predict" className="btn btn-primary">
            Run a New Prediction
          </a>
          <a href="/player" className="btn btn-secondary">
            Explore Players
          </a>
        </div>
      </div>
    </section>
  );
}
