import mysql.connector

def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        port="3305",
        password="",
        database="alumnos"
    )
