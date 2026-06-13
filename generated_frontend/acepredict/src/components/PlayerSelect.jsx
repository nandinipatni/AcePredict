import { PLAYERS } from '../services/players';
import './PlayerSelect.css';

export default function PlayerSelect({ label, value, onChange, exclude }) {
  return (
    <div className="player-select-group">
      <label className="player-select-label">{label}</label>
      <select className="player-select" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select a player</option>
        {PLAYERS.filter((p) => p !== exclude).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
}
