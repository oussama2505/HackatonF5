from flask import Flask, jsonify, request
import mysql.connector
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
import csv
import io
import random

app = Flask(__name__)
CORS(app)

SWAGGER_URL="/swagger"
API_URL="/static/swagger.json"

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': 'Access API'
    }
)
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

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
            return jsonify({'message': 'csv file loaded successfully'}), 200
        except Exception as e:
            db.rollback()
            return jsonify({'error': str(e)}), 500
        finally:
            cursor.close()
            db.close()
    else:
        return jsonify({'error': 'File formmat not allowed, please upload a .csv file'}), 400

@app.route('/api/grupos', methods=['GET'])
def get_grupos():
    db = mysql.connector.connect(host="localhost",user="root", passwd="", database="alumnos")
    cursor1 = db.cursor(dictionary=True)
    cursor1.execute("SELECT * FROM alumno_tabla")
    personas = cursor1.fetchall()

    random.shuffle(personas)  # Mezcla aleatoriamente las personas

    total_personas = len(personas)
    min_grupo = 8
    max_grupo = 9
    
    # Calcula el número de grupos necesarios
    num_grupos = (total_personas + min_grupo - 1) // min_grupo

    # Inicializa la lista de grupos vacía
    grupos = [[] for _ in range(num_grupos)]
    grupos_caracteristicas = [set() for _ in range(num_grupos)]
    
    # Función para verificar si una persona puede ser añadida a un grupo
    def puede_agregar_a_grupo(grupo, persona):
        bootcamp = persona['bootcamp']
        return bootcamp not in grupos_caracteristicas[grupo]
    
    # Asigna personas a los grupos
    for persona in personas:
        asignado = False
        for _ in range(num_grupos):
            grupo = random.randint(0, num_grupos - 1)
            if len(grupos[grupo]) < max_grupo and puede_agregar_a_grupo(grupo, persona):
                grupos[grupo].append(persona)
                grupos_caracteristicas[grupo].add(persona['bootcamp'])
                asignado = True
                break
        
        # Si no se encuentra un grupo adecuado, agregar al grupo menos lleno
        if not asignado:
            grupo_menos_lleno = min(range(len(grupos)), key=lambda x: len(grupos[x]))
            grupos[grupo_menos_lleno].append(persona)
            grupos_caracteristicas[grupo_menos_lleno].add(persona['bootcamp'])

    cursor1.close()
    db.close()
    
    return jsonify(grupos)

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
