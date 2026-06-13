const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  return res.json();
}

export async function getPlayer(playerName) {
  return request(`/player/${encodeURIComponent(playerName)}`);
}

export async function getHeadToHead(playerA, playerB) {
  return request(`/head-to-head/${encodeURIComponent(playerA)}/${encodeURIComponent(playerB)}`);
}

export async function predictMatch(playerA, playerB) {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player_a: playerA, player_b: playerB }),
  });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  return res.json();
}

export async function pingApi() {
  return request('/');
}
