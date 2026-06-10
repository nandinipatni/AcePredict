from flask import Flask, request, jsonify

from predictor import predict_players


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


if __name__ == "__main__":
    app.run(
        debug=True
    )