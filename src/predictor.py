import pandas as pd
import joblib


MODEL_PATH = "models/acepredict_v1.pkl"
PLAYERS_PATH = "data/processed/latest_players.csv"
MATCHES_PATH = "data/processed/all_matches.csv"


model = joblib.load(MODEL_PATH)

latest_players = pd.read_csv(
    PLAYERS_PATH
)

all_matches = pd.read_csv(
    MATCHES_PATH
)


def get_player_stats(player_name):

    player = latest_players[
        latest_players["player_name"] == player_name
    ]

    if len(player) == 0:
        return None

    return player.iloc[0]


def get_head_to_head(
    player_a,
    player_b
):

    matches = all_matches[
        (
            (all_matches["winner_name"] == player_a)
            &
            (all_matches["loser_name"] == player_b)
        )
        |
        (
            (all_matches["winner_name"] == player_b)
            &
            (all_matches["loser_name"] == player_a)
        )
    ]

    player_a_wins = len(
        matches[
            matches["winner_name"] == player_a
        ]
    )

    player_b_wins = len(
        matches[
            matches["winner_name"] == player_b
        ]
    )

    return {
        "player_a": player_a,
        "player_b": player_b,
        "player_a_wins": int(player_a_wins),
        "player_b_wins": int(player_b_wins),
        "total_matches": int(len(matches))
    }


def get_confidence(probability):

    if probability >= 0.80:
        return "Very High"

    elif probability >= 0.70:
        return "High"

    elif probability >= 0.60:
        return "Medium"

    elif probability >= 0.55:
        return "Low"

    else:
        return "Very Low"


def predict_players(
    player_a,
    player_b
):

    player_a_stats = get_player_stats(
        player_a
    )

    player_b_stats = get_player_stats(
        player_b
    )

    if player_a_stats is None:
        return f"Player not found: {player_a}"

    if player_b_stats is None:
        return f"Player not found: {player_b}"

    rank_difference = (
        player_b_stats["rank"]
        - player_a_stats["rank"]
    )

    rank_points_difference = (
        player_a_stats["rank_points"]
        - player_b_stats["rank_points"]
    )

    age_difference = (
        player_a_stats["age"]
        - player_b_stats["age"]
    )

    match_data = pd.DataFrame({
        "surface": [0],
        "tourney_level": [2],
        "round": [6],
        "best_of": [5],
        "rank_difference": [rank_difference],
        "rank_points_difference": [rank_points_difference],
        "age_difference": [age_difference]
    })

    probability = model.predict_proba(
        match_data
    )[0][1]

    confidence = get_confidence(
        probability
    )

    return {
        "player_a": player_a,
        "player_b": player_b,
        "player_a_probability": float(
            round(probability * 100, 2)
        ),
        "player_b_probability": float(
            round((1 - probability) * 100, 2)
        ),
        "confidence": confidence
    }