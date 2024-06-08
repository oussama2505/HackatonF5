import pytest
import mysql.connector
from mysql.connector import Error

def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        port="3305",
        password="",
        database="alumnos"
    )

def test_connect_db():
    conn = None
    try:
        conn = connect_db()
        assert conn.is_connected()
    except Error as e:
        pytest.fail(f"Database connection failed: {e}")
    finally:
        if conn and conn.is_connected():
            conn.close()
