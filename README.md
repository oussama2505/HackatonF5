# HackatonF5

Hackaton Organizer

Indice

1. Introducción
2. Tecnologías
3. Funcionalidad del proyecto
4. Vistas
5. Equipo de desarrollo

Introducción

Basado en el requerimiento por parte de la organización "Somos F5", se ha creado Hackaton Organizer, una aplicación de manejo interno cuyo eje fundamental es la estructuración de un selector inteligente para el reparto de grupos en la siguiente cumbre de coders a nivel nacional. Los organizadores del encuentro masivo de desarrolladores han puntualizado falencias representativas en su estructura de distribución de los diferentes grupos, y por ende han confiado en la lógica de programación para generar un sistema que tome parámetros definidos, como por ejemplo: un límite de personas por promoción, y equilibrar los niveles de Frontend junto con Backend para hacer de la competencia una lucha de conocimientos lo más equilibrada posible. Este a su vez deberá hacer cumplir con las expectativas que se han trazado en el mercado del planteamiento y mostrar un producto mucho más sensato y convincente que el de los años inmediatamente anteriores. 

Hackaton Organizer tiene como finalidad tomar una base de datos general, proporcionada por cada uno de los responsables de zona y reagrupada posteriormente, para alojarlos en un sistema que sea capaz de procesarlo, y lanzar peticiones para la confección de la misma. Todo esto al alcance de click, que depura la labor, y hace mucho más confiable el ejercicio en beneficio de todos los implicados.

Paleta de colores:

--------------------

Tecnologías:

-------------------

Funcionalidades del proyecto:

1. Logueo:

- Da acceso al administrador a la interfaz de la aplicación.

2. Elección de idiomas:

- Permite al consumidor final del sistema elegir entre dos opciones de idioma: inglés y castellano.

3. Seleccionar un archivo:

- A través de una carga de archivo, el administrador logueado podrá subir al sistema en comunicación con el Backend un documento que contenga los campos pedidos, con los usuarios o competidores del evento.

- El UploadCsv lo que permite es almacenar el archivo en la base de datos que a partir de ese momento va a ser consultada por el sistema.

4. Mostrar grupos:

- Una vez cargado el archivo, pulsando este botón se despliega un protocolo que recorre los elementos y los pinta dinámicamente en cartas.

5. Borrar todos los datos:

- Este botón cumple la función de eliminar la carga de los archivos. Elimina la base de datos que corre en el Backend en remoto, haciendo que para la realización de un nuevo despliegue sea necesario cumplir con el protocolo de carga desde cero.

6. Logout:

- Termina el proceso que ha partido desde el inicio de sesión. Esto hace que el administrador pueda controlar el tiempo invertido en su estancia dentro de la aplicación.

7. About us:

- Este apartado genera una vista adicional que muestra directamente enlaces de contacto de todo el equipo de desarrollo.


Vistas:

Home: Esta vista cuenta con 3 componentes: el header, el login y el footer. Su principal objetivo es mostrar de forma interna un formulario de logueo que cuenta con dos campos, el de email y el de contraseña. Una vez identificados tendrá el administrador un acceso a la aplicación para la carga del archivo que contendrá los campos necesarios, con los usuarios verificados que ya han notificado su presencia en el evento. 

Dashboard: En esta vista se muestra una interfaz de carga del archivo que contiene los datos que el sistema procesará. El encargado de la subida podrá ver un botón de selección que inspeccionará los archivos que estén almacenados en un disco duro (interno, o externo) que cumpla con las características solicitadas. Esta vista contiene tres componentes: el header, el UploadCsv y el footer.

Grupos: El eje central de la aplicación, esta vista contiene, no solo el header y el footer, sino que suma la lógica propia de la comunicación entre el Frontend y el Backend. El componente TeamDetail trae los campos solicitados de la base de datos y los inserta en cartas que se alimentan dinámicamente. Adicionalmente incorpora dos componentes más, que reparten los grupos, y limpia la base de datos cargados en caso que se quiera sumar una nueva carga de un archivo contenedor de datos corporativos.  

Equipo de desarrollo:

- Elías Riquelme (scrum master)
- Johan Sebastián Rodríguez (product owner)
- Agustina Calleja (web developer)
- Oussama Brahmi (web developer)
