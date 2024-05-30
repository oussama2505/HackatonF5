import mysql.connector


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