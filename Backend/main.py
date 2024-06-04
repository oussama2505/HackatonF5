from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="alumnos"
    )

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part", 400

    file = request.files['file']
    if file.filename == '':
        return "No selected file", 400

    if file and file.filename.endswith('.csv'):
        file.save(os.path.join('/tmp', file.filename))
        data = pd.read_csv(os.path.join('/tmp', file.filename))
        os.remove(os.path.join('/tmp', file.filename))

        db = connect_db()
        cursor = db.cursor()

        # Clean table before insert (Optional)
        cursor.execute("DELETE FROM alumno_tabla")
        db.commit()

        for index, row in data.iterrows():
            cursor.execute("INSERT INTO alumno_tabla (nombre, apellido, email, bootcamp, frontend, backend) VALUES (%s, %s)", (row['Nombre'], row['Apellido'], row['Email'],row['Bootcamp'], row['Frontend'], row['Backend']))

        db.commit()
        cursor.close()
        db.close()

        return jsonify(data.to_dict(orient='records')), 200

    return "Invalid file format", 400

@app.route('/personas', methods=['GET'])
def get_personas():
    db = connect_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM alumno_tabla")
    personas = cursor.fetchall()
    cursor.close()
    db.close()
    return jsonify(personas)

if __name__ == "__main__":
    app.run(debug=True, port=4000, host="0.0.0.0")
