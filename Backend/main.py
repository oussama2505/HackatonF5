from flask import Flask
import mysql.connector


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


conexion1=mysql.connector.connect(host="localhost", user="root", passwd="")
cursor1=conexion1.cursor()
cursor1.execute("show databases")
for base in cursor1:
    print(base)
conexion1.close()   

print("-----------------------------------------------------------")

conexion1=mysql.connector.connect(host="localhost", 
                                  user="root", 
                                  passwd="", 
                                  database="alumnos")
cursor1=conexion1.cursor()
cursor1.execute("show tables")
for tabla in cursor1:
    print(tabla)
""" conexion1.close() """
import mysql.connector


## Con esto hacemos la consulta! 
conexion1=mysql.connector.connect(host="localhost", 
                                  user="root", 
                                  passwd="", 
                                  database="alumnos")
cursor1=conexion1.cursor()
cursor1.execute("select * from alumno_tabla")
for fila in cursor1:
    print(fila)
conexion1.close()    

if __name__ == "__main__":
    app.run(debug=True, port="4000", host="0.0.0.0")