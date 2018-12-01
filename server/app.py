from flask import Flask
from flask import url_for
import json
app = Flask(__name__)

@app.route('/')
def test():
    with open("../Tweets/tweetsentiment.json") as f:
        data = f.read()
        f.close()
        return data

