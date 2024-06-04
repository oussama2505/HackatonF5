from flask import Flask, jsonify, request
import mysql.connector
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
import csv
import io

app = Flask(__name__)
CORS(app)

def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="alumnos"
    )

@app.route('/api/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file and file.filename.endswith('.csv'):
        stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
        csv_data = csv.reader(stream, delimiter=',', quotechar='"')
        
        # Skip the header row
        next(csv_data, None)
        
        db = connect_db()
        cursor = db.cursor()

        try:
            for row in csv_data:
                if row:  # Check if row is not empty
                    nombre, apellido, front, back, email, bootcamp = row
                    cursor.execute("INSERT INTO alumno_tabla (nombre, apellido, front, back, email, bootcamp) VALUES (%s, %s, %s, %s, %s, %s)",
                                   (nombre, apellido, int(front), int(back), email, bootcamp))

            db.commit()
            return jsonify({'message': 'Archivo CSV cargado correctamente'}), 200
        except Exception as e:
            db.rollback()
            return jsonify({'error': str(e)}), 500
        finally:
            cursor.close()
            db.close()
    else:
        return jsonify({'error': 'Formato de archivo no permitido. Por favor, suba un archivo CSV.'}), 400



@app.route('/api/clear', methods=['DELETE'])
def clear_table():
    db = connect_db()
    cursor = db.cursor()

    try:
        cursor.execute("DELETE FROM alumno_tabla")
        db.commit()
        return jsonify({'message': 'Todos los datos han sido eliminados'}), 200
    except Exception as e:
        db.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        db.close()


@app.route('/api/personas', methods=['GET'])
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
