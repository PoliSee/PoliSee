from flask import Flask
from flask import url_for
from flask_cors import CORS
import json
from flask import jsonify
app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    with open("../Tweets/tweetsentiment.json") as f:
        data = jsonify(json.load(f))
        return data
