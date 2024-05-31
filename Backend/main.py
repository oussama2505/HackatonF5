from flask import Flask, jsonify
from connect_mysql import *
import mysql.connector

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/api/personas', methods=['GET'])
def get_personas():
    db = mysql.connector.connect(host="localhost", 
                                  user="root", 
                                  passwd="", 
                                  database="alumnos")
    cursor1 = db.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM alumno_tabla")
    personas = cursor1.fetchall()
    cursor1.close()
    db.close()
    return jsonify(personas)

if __name__ == "__main__":
    app.run(debug=True, port="4000", host="0.0.0.0")