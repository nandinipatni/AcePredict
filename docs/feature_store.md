# Feature Store Specification

## Purpose

This document defines all machine learning features used by AcePredict Version 1.

For each feature we document:

* Feature Name
* Description
* Source Table
* Calculation Logic
* Update Logic

---

# Feature Group: Rankings

## player_rank

Description:

ATP ranking of the player before the match.

Source:

rankings

Calculation:

Latest ranking available before match date.

Update Logic:

Updated whenever new ranking data is loaded.

---

## opponent_rank

Description:

ATP ranking of the opponent before the match.

Source:

rankings

Calculation:

Latest ranking available before match date.

Update Logic:

Updated whenever new ranking data is loaded.

---

## rank_difference

Description:

Difference between player and opponent ranking.

Source:

rankings

Formula:

rank_difference = opponent_rank - player_rank

Update Logic:

Computed during feature generation.

---

# Feature Group: Elo Ratings

## player_elo

Description:

Player's overall Elo rating before match.

Source:

elo_ratings

Calculation:

Most recent Elo rating before match date.

Update Logic:

Recomputed after every processed match.

---

## opponent_elo

Description:

Opponent Elo rating before match.

Source:

elo_ratings

Calculation:

Latest Elo value before match.

Update Logic:

Recomputed after every processed match.

---

## elo_difference

Description:

Difference between player and opponent Elo.

Source:

elo_ratings

Formula:

elo_difference = player_elo - opponent_elo

Update Logic:

Computed during feature generation.

---

## surface_elo_difference

Description:

Surface-specific Elo difference.

Source:

elo_ratings

Formula:

surface_player_elo - surface_opponent_elo

Update Logic:

Computed during feature generation.

---

# Feature Group: Recent Form

## wins_last_5

Description:

Number of wins in previous five matches.

Source:

matches

Calculation:

Count wins from last five completed matches.

Update Logic:

Computed at feature generation time.

---

## wins_last_10

Description:

Number of wins in previous ten matches.

Source:

matches

Calculation:

Count wins from last ten completed matches.

Update Logic:

Computed at feature generation time.

---

## recent_win_rate

Description:

Recent performance indicator.

Source:

matches

Formula:

wins_last_10 / 10

Update Logic:

Computed at feature generation time.

---

# Feature Group: Surface Performance

## hard_win_rate

Description:

Career hard-court win percentage before match date.

Source:

matches

Formula:

hard_wins / hard_matches

Update Logic:

Recomputed during feature generation.

---

## clay_win_rate

Description:

Career clay-court win percentage.

Source:

matches

Formula:

clay_wins / clay_matches

Update Logic:

Recomputed during feature generation.

---

## grass_win_rate

Description:

Career grass-court win percentage.

Source:

matches

Formula:

grass_wins / grass_matches

Update Logic:

Recomputed during feature generation.

---

## surface_experience

Description:

Total matches played on current surface.

Source:

matches

Formula:

surface_match_count

Update Logic:

Computed during feature generation.

---

# Feature Group: Head-to-Head

## h2h_wins

Description:

Historical wins against opponent.

Source:

matches

Formula:

Count previous wins versus opponent.

Update Logic:

Computed during feature generation.

---

## h2h_losses

Description:

Historical losses against opponent.

Source:

matches

Formula:

Count previous losses versus opponent.

Update Logic:

Computed during feature generation.

---

## h2h_win_rate

Description:

Historical win percentage against opponent.

Source:

matches

Formula:

h2h_wins / (h2h_wins + h2h_losses)

Update Logic:

Computed during feature generation.

---

# Feature Group: Tournament Performance

## tournament_win_rate

Description:

Historical win percentage at current tournament.

Source:

matches

Formula:

tournament_wins / tournament_matches

Update Logic:

Computed during feature generation.

---

## best_tournament_round

Description:

Best round previously reached at tournament.

Source:

matches

Calculation:

Maximum historical round reached.

Update Logic:

Computed during feature generation.

---

# Feature Group: Activity

## days_since_last_match

Description:

Rest period before match.

Source:

matches

Formula:

match_date - previous_match_date

Update Logic:

Computed during feature generation.

---

## matches_last_14_days

Description:

Recent workload indicator.

Source:

matches

Formula:

Count matches played during previous 14 days.

Update Logic:

Computed during feature generation.

---

## matches_last_30_days

Description:

Medium-term workload indicator.

Source:

matches

Formula:

Count matches played during previous 30 days.

Update Logic:

Computed during feature generation.

---

# Data Leakage Policy

All features must be computed using information available before the match being predicted.

No future match information may be used.

This rule applies to:

* Elo ratings
* Rankings
* Surface statistics
* Head-to-head statistics
* Tournament statistics
* Recent form metrics

---

# Version

Feature Store Version: v1

Status: Draft
