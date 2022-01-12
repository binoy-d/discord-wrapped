import json
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

@app.route("/members", methods = ['GET'])
def members():
    with open("./data/members.json") as f:
        response = jsonify(json.load(f))
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response



@app.route("/bubble_messages", methods = ['GET'])
def bubble_messages():
    with open("./data/bubble_messages.json") as f:
        response = jsonify(json.load(f))
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response


if __name__ == "__main__":
    app.run(debug=True)