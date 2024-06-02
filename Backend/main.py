from flask import Flask, jsonify, request
from connect_mysql import *
import mysql.connector
import csv

app = Flask(__name__)

@app.route('/api/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file:
        # Leer el archivo CSV
        csv_data = csv.reader(file.stream, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        # Conectar a la base de datos MySQL
        db = mysql.connector.connect(host="localhost", user="root", passwd="", database="alumnos")
        cursor = db.cursor()

        # Iterar sobre las filas del archivo CSV e insertar en la base de datos
        for row in csv_data:
            nombre, apellido, front, back, email, bootcamp = row
            cursor.execute("INSERT INTO alumno_tabla (nombre, apellido, front, back, email, bootcamp) VALUES (%s, %s, %s, %s, %s, %s)", (nombre, apellido, front, back, email, bootcamp))

        # Confirmar los cambios y cerrar la conexión
        db.commit()
        cursor.close()
        db.close()

        return jsonify({'message': 'Archivo CSV cargado correctamente'}), 200
    else:
        return jsonify({'error': 'No se proporcionó ningún archivo CSV'}), 400



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