from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="alumnos"
    )

@app.route('/api/personas', methods=['GET'])
def get_personas():
    db = mysql.connector.connect(host="localhost", user="root", passwd="", database="alumnos")
    cursor1 = db.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM alumno_tabla")
    personas = cursor1.fetchall()
    cursor1.close()
    db.close()
    return jsonify(personas)

@app.route('/api/grupos', methods=['GET'])
def get_grupos():
    db = mysql.connector.connect(host="localhost", user="root", passwd="", database="alumnos")
    cursor1 = db.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM alumno_tabla")
    personas = cursor1.fetchall()

    grupos = [personas[i:i+7] for i in range(0, len(personas), 7)]

    cursor1.close()
    db.close()
    return jsonify(grupos)

if __name__ == "__main__":
    app.run(debug=True, port="4000", host="0.0.0.0")