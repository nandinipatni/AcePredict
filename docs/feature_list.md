# Feature List

## Objective

Define the initial feature set used for ATP match prediction.

Version:

feature_set_v1

---

# Ranking Features

| Feature         | Description                                     |
| --------------- | ----------------------------------------------- |
| player_rank     | ATP ranking of player                           |
| opponent_rank   | ATP ranking of opponent                         |
| rank_difference | Difference between player and opponent rankings |

---

# Elo Features

| Feature                | Description                     |
| ---------------------- | ------------------------------- |
| player_elo             | Overall Elo rating              |
| opponent_elo           | Opponent Elo rating             |
| elo_difference         | Elo difference between players  |
| surface_elo_difference | Surface-specific Elo difference |

---

# Recent Form Features

| Feature              | Description                        |
| -------------------- | ---------------------------------- |
| wins_last_5          | Wins in previous 5 matches         |
| wins_last_10         | Wins in previous 10 matches        |
| recent_win_rate      | Win percentage over recent matches |
| matches_last_30_days | Number of recent matches played    |

---

# Surface Features

| Feature            | Description                     |
| ------------------ | ------------------------------- |
| hard_win_rate      | Hard court win percentage       |
| clay_win_rate      | Clay court win percentage       |
| grass_win_rate     | Grass court win percentage      |
| surface_experience | Total matches played on surface |

---

# Head-to-Head Features

| Feature      | Description                                |
| ------------ | ------------------------------------------ |
| h2h_wins     | Wins against opponent                      |
| h2h_losses   | Losses against opponent                    |
| h2h_win_rate | Historical win percentage against opponent |

---

# Tournament Features

| Feature               | Description                          |
| --------------------- | ------------------------------------ |
| tournament_win_rate   | Historical performance at tournament |
| best_tournament_round | Best historical tournament result    |

---

# Activity Features

| Feature               | Description                        |
| --------------------- | ---------------------------------- |
| days_since_last_match | Rest period before match           |
| matches_last_14_days  | Matches played in previous 14 days |
| matches_last_30_days  | Matches played in previous 30 days |
