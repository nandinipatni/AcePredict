import './PredictionCard.css';
import ProbabilityBar from './ProbabilityBar';

export default function PredictionCard({ data }) {
  if (!data) return null;

  const {
    player_a,
    player_b,
    player_a_probability,
    player_b_probability,
    confidence,
  } = data;

  const favorite = player_a_probability >= player_b_probability ? player_a : player_b;
  const favoriteProb = Math.max(player_a_probability, player_b_probability);

  return (
    <div className="card prediction-card">
      <div className="prediction-card-header">
        <span className="prediction-card-title">Prediction Result</span>
        <span className="eyebrow">{confidence} Confidence</span>
      </div>

      <p className="prediction-card-summary">
        <strong>{favorite}</strong> is favored to win with a {favoriteProb.toFixed(1)}% win
        probability, based on current ATP rankings, ranking points and historical match data.
      </p>

      <ProbabilityBar
        playerA={player_a}
        playerB={player_b}
        probabilityA={player_a_probability}
        probabilityB={player_b_probability}
      />

      <div className="prediction-stats">
        <div className="prediction-stat">
          <div className="prediction-stat-label">Win Probability</div>
          <div className="prediction-stat-value accent">{favoriteProb.toFixed(1)}%</div>
        </div>
        <div className="prediction-stat">
          <div className="prediction-stat-label">Confidence Score</div>
          <div className="prediction-stat-value">{confidence}</div>
        </div>
        <div className="prediction-stat">
          <div className="prediction-stat-label">Player A</div>
          <div className="prediction-stat-value">{player_a}</div>
        </div>
        <div className="prediction-stat">
          <div className="prediction-stat-label">Player B</div>
          <div className="prediction-stat-value">{player_b}</div>
        </div>
      </div>
    </div>
  );
}
