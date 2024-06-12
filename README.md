# Hackaton Organizer

<p align="center">
  <img src="./Frontend/hackathon-admin/src/assets/logo.png" alt="Hackathon Organizer Logo"/>
</p>

## Indice

1. [Introducción](#introducción)
2. [Tecnologías](#tecnologías)
3. [Funcionalidad del proyecto](#funcionalidad-del-proyecto)
4. [Vistas](#vistas)
5. [Equipo de desarrollo](#equipo-de-desarrollo)

## Introducción

Basado en el requerimiento por parte de la organización "Somos F5", se ha creado Hackaton Organizer, una aplicación de manejo interno cuyo eje fundamental es la estructuración de un selector inteligente para el reparto de grupos en la siguiente cumbre de coders a nivel nacional. Los organizadores del encuentro masivo de desarrolladores han puntualizado falencias representativas en su estructura de distribución de los diferentes grupos, y por ende han confiado en la lógica de programación para generar un sistema que tome parámetros definidos, como por ejemplo: un límite de personas por promoción, y equilibrar los niveles de Frontend junto con Backend para hacer de la competencia una lucha de conocimientos lo más equilibrada posible. Este a su vez deberá hacer cumplir con las expectativas que se han trazado en el mercado del planteamiento y mostrar un producto mucho más sensato y convincente que el de los años inmediatamente anteriores. 

Hackaton Organizer tiene como finalidad tomar una base de datos general, proporcionada por cada uno de los responsables de zona y reagrupada posteriormente, para alojarlos en un sistema que sea capaz de procesarlo, y lanzar peticiones para la confección de la misma. Todo esto al alcance de click, que depura la labor, y hace mucho más confiable el ejercicio en beneficio de todos los implicados.

Paleta de colores:

--------------------

### Acceso directo 

```
git clone: https://github.com/oussama2505/HackatonF5.git
```

## Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)         ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white)      ![Linux Mint](https://img.shields.io/badge/Linux_Mint-87CF3E?style=for-the-badge&logo=linux-mint&logoColor=white)          ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)      ![Vue3](https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)       ![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)      ![Vs Code](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)       ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)    ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)   ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

##Funcionalidades del proyecto:

1. Logueo:

- Da acceso al administrador a la interfaz de la aplicación.

<img src="./Frontend/hackathon-admin/src/assets/home.png" />

2. Elección de idiomas:

- Permite al consumidor final del sistema elegir entre dos opciones de idioma: inglés y castellano.

<img src="./Frontend/hackathon-admin/src/assets/Idioma.png" />

3. Seleccionar un archivo:

- A través de una carga de archivo, el administrador logueado podrá subir al sistema en comunicación con el Backend un documento que contenga los campos pedidos, con los usuarios o competidores del evento.

<img src="./Frontend/hackathon-admin/src/assets/Dashboard.png" />

- El UploadCsv lo que permite es almacenar el archivo en la base de datos que a partir de ese momento va a ser consultada por el sistema.

4. Mostrar grupos:

- Una vez cargado el archivo, pulsando este botón se despliega un protocolo que recorre los elementos y los pinta dinámicamente en cartas.

<img src="./Frontend/hackathon-admin/src/assets/Dashboard_vista.png" />

Además se ha adicionado una vista del archivo en el formato original que sirva de apoyo para el administrador, y este pueda apropiarse de los datos que quiere subir al sistema. 

5. Borrar todos los datos:

- Este botón cumple la función de eliminar la carga de los archivos. Elimina la base de datos que corre en el Backend en remoto, haciendo que para la realización de un nuevo despliegue sea necesario cumplir con el protocolo de carga desde cero.

<img src="./Frontend/hackathon-admin/src/assets/borrar_todos.png"/>

6. Logout:

- Termina el proceso que ha partido desde el inicio de sesión. Esto hace que el administrador pueda controlar el tiempo invertido en su estancia dentro de la aplicación.


<img src="./Frontend/hackathon-admin/src/assets/cerrar_sesion.png" />

- Este apartado ha incluido una ventana modal que muestra al administrador una advertencia, en donde se detalla a precisión que la aceptación del proceso eliminará de la base de datos el archivo que se ha cargado previamente en el Dashboard.

<img src="./Frontend/hackathon-admin/src/assets/Modal.png" />

7. About us:

- Este apartado genera una vista adicional que muestra directamente enlaces de contacto de todo el equipo de desarrollo.

<img src="./Frontend/hackathon-admin/src/assets/sobre_nosotros.png" />


## Vistas:

### Home: 

Esta vista cuenta con 3 componentes: el header, el login y el footer. Su principal objetivo es mostrar de forma interna un formulario de logueo que cuenta con dos campos, el de email y el de contraseña. Una vez identificados tendrá el administrador un acceso a la aplicación para la carga del archivo que contendrá los campos necesarios, con los usuarios verificados que ya han notificado su presencia en el evento. 

### Dashboard: 

En esta vista se muestra una interfaz de carga del archivo que contiene los datos que el sistema procesará. El encargado de la subida podrá ver un botón de selección que inspeccionará los archivos que estén almacenados en un disco duro (interno, o externo) que cumpla con las características solicitadas. Esta vista contiene tres componentes: el header, el UploadCsv y el footer.

### Grupos: 

El eje central de la aplicación, esta vista contiene, no solo el header y el footer, sino que suma la lógica propia de la comunicación entre el Frontend y el Backend. El componente TeamDetail trae los campos solicitados de la base de datos y los inserta en cartas que se alimentan dinámicamente. Adicionalmente incorpora dos componentes más, que reparten los grupos, y limpia la base de datos cargados en caso que se quiera sumar una nueva carga de un archivo contenedor de datos corporativos.  

## Equipo de desarrollo:


A continuación encontrarán la lista detallada de cada uno de los integrantes en la construcción del proyecto, con un enlace a su contacto. 

- [Elías Riquelme (scrum master)](https://www.linkedin.com/in/elias-javier-riquelme-b62655297/)
- [Johan Sebastián Rodríguez (product owner)](https://www.linkedin.com/in/johan-sebastian-rodriguez-g/)
- [Agustina Calleja (web developer)](https://www.linkedin.com/in/tina-calleja/)
- [Oussama Brahmi (web developer)](https://www.linkedin.com/in/oussama-brahmi-b1551a280/)

## Mención especial:

<img src="./Frontend/hackathon-admin/src/assets/f5.png" />

Como equipo de trabajo, queremos extender nuestro más sincero agradecimiento a los gestores del proyecto. La confianza, el apoyo constante y la retroalimentación entregada en momentos específicos hicieron del proceso un momento muy importante dentro del instante formativo. 

Por parte del stakeholder (Andrés Patiño), y la organización en concreto, Somos F5, el empeño por entregar las herramientas suficientes y mantener la motivación en lo más alto, han alimentado el espíritu competitivo del grupo que con esmero ha conseguido entregar un producto mínimo viable en el tiempo acordado. 
