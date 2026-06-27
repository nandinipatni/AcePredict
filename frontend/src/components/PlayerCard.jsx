import './PlayerCard.css';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function PlayerCard({ player }) {
  if (!player) return null;

  const { player_name, rank, rank_points, age, tourney_date } = player;

  return (
    <div className="card player-card">
      <div className="player-card-head">
        <div className="player-card-avatar">{initials(player_name)}</div>
        <div>
          <div className="player-card-name">{player_name}</div>
          <div className="player-card-rank">ATP Rank #{rank}</div>
        </div>
      </div>

      <div className="player-card-stats">
        <div>
          <div className="player-card-stat-label">Rank Points</div>
          <div className="player-card-stat-value">{rank_points.toLocaleString()}</div>
        </div>
        <div>
          <div className="player-card-stat-label">Age</div>
          <div className="player-card-stat-value">{age}</div>
        </div>
        <div>
          <div className="player-card-stat-label">Last Tournament</div>
          <div className="player-card-stat-value">{tourney_date}</div>
        </div>
      </div>
    </div>
  );
}
