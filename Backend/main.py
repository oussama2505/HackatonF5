import csv
from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS
import mysql.connector

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
    db = connect_db()
    cursor1 = db.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM alumno_tabla")
    personas = cursor1.fetchall()
    cursor1.close()
    db.close()
    return jsonify(personas)

@app.route('/api/grupos', methods=['GET'])
def get_grupos():
    db = connect_db()
    cursor1 = db.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM alumno_tabla")
    personas = cursor1.fetchall()
    
    grupos = [personas[i:i+7] for i in range(0, len(personas), 7)]
    
    cursor1.close()
    db.close()
    return jsonify(grupos)

if __name__ == '__main__':
    app.run(debug=True)

#################################


""" 
# Leer archivo CSV y cargar datos
with open('personas.csv', 'r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader)  # Saltar encabezados si los tiene
    for row in csv_reader:
        cursor.execute("INSERT INTO personas (nombre, email, edad) VALUES (%s, %s, %s)", row)

db.commit()
cursor.close()
db.close()
 """