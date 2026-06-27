import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Predict from '../pages/Predict';
import HeadToHead from '../pages/HeadToHead';
import Player from '../pages/Player';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Predict />} />
      <Route path="/head-to-head" element={<HeadToHead />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  );
}
