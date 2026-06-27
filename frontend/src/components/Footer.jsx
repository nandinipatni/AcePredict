import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">
            <img src={logo} alt="AcePredict" />
          </div>
          <p className="footer-tagline" style={{ marginTop: 12 }}>
            Built using ATP historical data, machine learning and modern web technologies.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/predict" className="footer-link">Predictions</Link>
          <Link to="/head-to-head" className="footer-link">Head-to-Head</Link>
          <Link to="/player" className="footer-link">Players</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
