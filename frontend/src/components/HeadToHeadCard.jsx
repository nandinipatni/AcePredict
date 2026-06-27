import './HeadToHeadCard.css';

export default function HeadToHeadCard({ data }) {
  if (!data) return null;

  const { player_a, player_b, player_a_wins, player_b_wins, total_matches } = data;

  return (
    <div className="card h2h-card">
      <div className="h2h-row">
        <div className="h2h-side">
          <div className="name">{player_a}</div>
          <div className="wins">{player_a_wins}</div>
          <div className="wins-label">Wins</div>
        </div>
        <div className="h2h-divider">VS</div>
        <div className="h2h-side">
          <div className="name">{player_b}</div>
          <div className="wins">{player_b_wins}</div>
          <div className="wins-label">Wins</div>
        </div>
      </div>
      <div className="h2h-total">
        Total Matches Played: <strong>{total_matches}</strong>
      </div>
    </div>
  );
}
