# Dataset Research

## Selected Dataset

Jeff Sackmann ATP Tennis Dataset

Repository:

https://github.com/JeffSackmann/tennis_atp

---

# Why This Dataset Was Selected

The Jeff Sackmann dataset was selected because it is one of the most widely used historical tennis datasets in the analytics community.

It provides:

* Historical ATP match results
* Tournament information
* Surface information
* Ranking information
* Long-term historical coverage

The dataset is suitable for machine learning, feature engineering, and statistical analysis.

---

# Data Available

The dataset contains information including:

* Match date
* Tournament
* Surface
* Round
* Winner
* Loser
* ATP rankings
* ATP ranking points
* Match statistics

This information supports all planned Version 1 features.

---

# Features Supported

The dataset enables construction of:

## Ranking Features

* player_rank
* opponent_rank
* rank_difference

## Elo Features

* player_elo
* opponent_elo
* elo_difference

## Surface Features

* hard_win_rate
* clay_win_rate
* grass_win_rate

## Head-to-Head Features

* h2h_wins
* h2h_losses
* h2h_win_rate

## Recent Form Features

* wins_last_5
* wins_last_10
* recent_win_rate

---

# Advantages

## Historical Coverage

Provides many years of ATP match history.

## Community Adoption

Widely used by tennis analysts, researchers, and data science projects.

## Reproducibility

Publicly available and easy to obtain.

## Feature Engineering Support

Contains sufficient information to generate predictive tennis features.

---

# Limitations

The dataset does not directly include:

* Injury information
* Travel schedules
* Weather conditions
* Practice performance
* Real-time player fitness

These limitations are accepted for Version 1.

---

# Alternative Data Sources Considered

## ATP Official Sources

Pros:

* Official data

Cons:

* Less convenient for historical analysis

---

## Third-Party APIs

Pros:

* Live data access

Cons:

* Added complexity
* Rate limits
* External dependencies

---

# Decision

Dataset Selected:

Jeff Sackmann ATP Tennis Dataset

Decision Status:

Accepted

Reason:

Provides the historical coverage, structure, and feature availability required for AcePredict Version 1.

---

# Version

Dataset Research Version: v1

Status: Accepted
