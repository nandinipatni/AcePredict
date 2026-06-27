import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/predict', label: 'Predictions' },
  { to: '/head-to-head', label: 'Head-to-Head' },
  { to: '/player', label: 'Players' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="AcePredict" />
        </NavLink>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            className="navbar-github"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.4 3.44 10 8.21 11.6.6.1.82-.27.82-.6v-2.1c-3.34.74-4.04-1.66-4.04-1.66-.55-1.4-1.33-1.78-1.33-1.78-1.08-.76.08-.74.08-.74 1.2.08 1.83 1.26 1.83 1.26 1.06 1.86 2.8 1.32 3.48 1 .1-.78.4-1.32.73-1.62-2.66-.3-5.47-1.36-5.47-6.04 0-1.34.46-2.43 1.23-3.29-.12-.3-.53-1.55.12-3.23 0 0 1-.33 3.3 1.26a11.3 11.3 0 0 1 6 0c2.28-1.59 3.29-1.26 3.29-1.26.65 1.68.24 2.93.12 3.23.77.86 1.23 1.95 1.23 3.29 0 4.7-2.82 5.74-5.5 6.04.43.38.81 1.13.81 2.28v3.38c0 .33.22.7.83.6A12.04 12.04 0 0 0 24 12.3C24 5.5 18.63 0 12 0z" />
            </svg>
            <span>GitHub</span>
          </a>
          <NavLink to="/predict" className="btn btn-primary">
            Predict Match
          </NavLink>
          <button className="navbar-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
