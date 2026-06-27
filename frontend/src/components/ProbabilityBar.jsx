import { useEffect, useState } from 'react';
import './ProbabilityBar.css';

export default function ProbabilityBar({ playerA, playerB, probabilityA, probabilityB }) {
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setAnimated(probabilityA));
    return () => cancelAnimationFrame(raf);
  }, [probabilityA]);

  return (
    <div className="prob-bar">
      <div className="prob-bar-labels">
        <span>
          <span className="name">{playerA}</span>{' '}
          <span style={{ color: 'var(--accent)' }}>{probabilityA.toFixed(1)}%</span>
        </span>
        <span>
          <span style={{ color: 'var(--silver-dim)' }}>{probabilityB.toFixed(1)}%</span>{' '}
          <span className="name">{playerB}</span>
        </span>
      </div>
      <div className="prob-bar-track">
        <div className="prob-bar-fill-a" style={{ width: `${animated}%` }} />
        <div className="prob-bar-fill-b" style={{ width: `${100 - animated}%` }} />
      </div>
    </div>
  );
}
