from flask import Flask, request, jsonify

from predictor import (
    predict_players,
    get_player_stats,
    get_head_to_head
)


app = Flask(__name__)


@app.route("/")
def home():

    return {
        "message": "AcePredict API Running"
    }


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    player_a = data["player_a"]
    player_b = data["player_b"]

    result = predict_players(
        player_a,
        player_b
    )

    return jsonify(result)


@app.route("/player/<player_name>")
def player_profile(player_name):

    player = get_player_stats(
        player_name
    )

    if player is None:

        return jsonify({
            "error": "Player not found"
        }), 404

    return jsonify(
        player.to_dict()
    )


@app.route(
    "/headtohead/<player_a>/<player_b>"
)
def head_to_head(
    player_a,
    player_b
):

    result = get_head_to_head(
        player_a,
        player_b
    )

    return jsonify(result)


if __name__ == "__main__":

    app.run(
        debug=True
    )