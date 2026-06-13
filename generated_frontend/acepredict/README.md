# AcePredict — Frontend

AI-powered tennis analytics and match prediction platform. React + Vite frontend that
connects to the AcePredict Flask API.

## Stack

- React 19 + Vite
- React Router
- Plain CSS with design tokens (no UI framework)

## Getting Started

```bash
npm install
cp .env.example .env.local   # set VITE_API_BASE_URL to your backend URL
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
  assets/        Logo and static assets
  components/    Navbar, MatchArena, PredictionCard, ProbabilityBar,
                  HeadToHeadCard, PlayerCard, PlayerSelect, Footer
  pages/         Home, Predict, HeadToHead, Player
  services/      api.js (Flask API client), players.js (roster for selectors)
  router/        Route definitions
```

## API

The frontend expects a Flask backend exposing:

- `GET /` — health check
- `GET /player/<player_name>`
- `GET /head-to-head/<player_a>/<player_b>`
- `POST /predict` — body: `{ player_a, player_b }`

Set the backend base URL via `VITE_API_BASE_URL` (defaults to `http://localhost:5000`).
The backend must enable CORS for the frontend's origin.

## Pages

- `/` — Homepage with the Match Arena hero (live featured prediction), feature
  highlights and stats.
- `/predict` — Prediction Center: select two players, run a prediction.
- `/head-to-head` — Head-to-Head Explorer: compare two players' historical record.
- `/player` — Player Intelligence: search a player's ranking, points, age and last
  tournament date.
