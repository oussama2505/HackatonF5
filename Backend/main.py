from flask import Flask
from connect_mysql import *


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



if __name__ == "__main__":
    app.run(debug=True, port="4000", host="0.0.0.0")