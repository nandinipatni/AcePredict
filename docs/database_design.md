# Database Design

## Purpose

The AcePredict database stores historical ATP tennis data and supports feature generation for machine learning models.

The database is designed to:

* Store historical match results
* Store player information
* Store ranking history
* Store Elo rating history
* Support feature engineering workflows
* Enable future analytics and prediction services

---

# Design Principles

The database should be:

* Reproducible
* Easy to query
* Historically accurate
* Extensible
* Suitable for machine learning workflows

The schema follows a normalized relational design to reduce duplication and improve consistency.

---

# Core Tables

## players

Purpose:

Stores player metadata.

Key Fields:

* player_id (Primary Key)
* full_name
* country
* birth_date
* handedness
* height_cm

Example:

```text
player_id: 104745
full_name: Novak Djokovic
country: SRB
```

---

## tournaments

Purpose:

Stores tournament metadata.

Key Fields:

* tournament_id (Primary Key)
* tournament_name
* surface
* level
* country

Example:

```text
tournament_name: Wimbledon
surface: Grass
level: Grand Slam
```

---

## matches

Purpose:

Stores historical ATP match results.

Primary Key:

* match_id

Foreign Keys:

* tournament_id → tournaments
* winner_id → players
* loser_id → players

Key Fields:

* match_id
* tournament_id
* winner_id
* loser_id
* match_date
* surface
* round
* winner_rank
* loser_rank
* winner_points
* loser_points

Example:

```text
Winner: Djokovic
Loser: Alcaraz
Surface: Grass
Round: Final
```

---

## rankings

Purpose:

Stores ATP ranking history.

Key Fields:

* ranking_id (Primary Key)
* player_id (Foreign Key)
* ranking_date
* rank
* ranking_points

Example:

```text
Player: Djokovic
Date: 2024-01-01
Rank: 1
```

---

## elo_ratings

Purpose:

Stores calculated Elo ratings.

Key Fields:

* elo_id (Primary Key)
* player_id (Foreign Key)
* rating_date
* overall_elo
* hard_elo
* clay_elo
* grass_elo

Example:

```text
overall_elo: 2150
grass_elo: 2280
```

---

# Relationships

players

1 → many rankings

1 → many elo_ratings

1 → many matches

---

tournaments

1 → many matches

---

matches

Many matches belong to one tournament.

Each match contains one winner and one loser.

Both players must exist in the players table.

---

# Future Tables

These tables are intentionally deferred from Version 1.

## feature_snapshots

Stores generated feature vectors used during training.

---

## model_predictions

Stores historical predictions.

---

## prediction_logs

Stores inference requests and outputs.

---

## tournament_simulations

Stores simulated tournament results.

---

# Data Source

Version 1 uses historical ATP match data from the Jeff Sackmann tennis dataset.

Reason:

* Widely used in tennis analytics
* Historical coverage
* Suitable for feature engineering
* Supports ranking and performance analysis

---

# Version

Database Design Version: v1
Status: Draft
