import io
import pytest
from flask import Flask, jsonify, request
from flask_jwt_extended import create_access_token
import json
from app.main import app  

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client: ## coloca la app en modo testin como cliente real y ejecuta sin necesidad dser el servidor real.
        yield client


## Verificar si el login es correcto con los datos correctos.
def test_login_success(client):
    response = client.post('/api/login', json={ ##voy a utilizar el client que viene de fixture para realizar una solicitud POST a la ruta /api/login.
        'email': 'elias@elias.com',
        'password': '123456'
    })
    assert response.status_code == 200
    data = json.loads(response.data)
    assert 'access_token' in data

##Verificar si el usuario y contraseña no son correctos, deberia fallar
def test_login_failure(client):
    response = client.post('/api/login', json={
        'email': 'elias@elias.com',
        'password': '1234567'
    })
    assert response.status_code == 401
    data = json.loads(response.data)
    assert data['msg'] == 'Bad email or password'

## Voy a probar que el token se utilice para entrar en los sitios con autorizacion
def test_protected_route_access(client):
    response = client.post('/api/login', json={
        'email': 'elias@elias.com',
        'password': '123456'
    })
    data = json.loads(response.data)
    token = data['access_token']
    
    response = client.get('/api/protected', headers={
        'Authorization': f'Bearer {token}'
    })
    assert response.status_code == 200
    data = json.loads(response.data)
    assert 'logged_in_as' in data

def test_protected_route_no_token(client):
    response = client.get('/api/protected')
    assert response.status_code == 401

def test_upload_csv_success(client):
    data = {
        'file': (io.BytesIO(b"nombre,apellido,front,back,email,bootcamp\nJohn,Doe,5,6,john@example.com,bootcamp1"), 'test.csv')
    }
    response = client.post('/api/upload', content_type='multipart/form-data', data=data)
    assert response.status_code == 200
    data = json.loads(response.data)
    assert data['message'] == 'csv file loaded successfully'

def test_upload_csv_failure(client):
    data = {
        'file': (io.BytesIO(b"Invalid file content"), 'test.txt')
    }
    response = client.post('/api/upload', content_type='multipart/form-data', data=data)
    assert response.status_code == 400
    data = json.loads(response.data)
    assert data['error'] == 'File format not allowed, please upload a .csv file'

def test_clear_table(client):
    response = client.delete('/api/clear')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert data['message'] == 'Todos los datos han sido eliminados'

def test_get_personas(client):
    response = client.get('/api/personas')
    assert response.status_code == 200
    data = json.loads(response.data)
    assert isinstance(data, list)
