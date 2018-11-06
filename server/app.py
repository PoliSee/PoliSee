from flask import Flask
from flask import url_for
import json
app = Flask(__name__)

@app.route('/')
def test():
    with open("pokedex.json") as f:
        s = json.load(f)
        f.close()
    return str(s)
