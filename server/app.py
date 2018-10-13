from flask import Flask
from flask import url_for
import os
app = Flask(__name__)

@app.route('/')
def test():
    with open("1.txt") as f:
        s = f.read()
        f.close()
    return str(s)
