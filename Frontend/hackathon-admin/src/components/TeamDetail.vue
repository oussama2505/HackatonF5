<template>
  <div class="containerGral">
    <button class="button-view" @click="fetchGroups">Mostrar Grupos</button>
    
    <div v-if="groups.length"><br>
      <h4>Revise los grupos generados.</h4>
      <h4>Si esta de acuerdo con estos grupos puede descargarlos en formato CSV para su posterior utilización en el siguiente botón </h4><br>
      <button class="button-view" @click="downloadCSV">Descargar Grupos en .CSV</button>
      <div class="container">
        <div v-for="(group, groupIndex) in groups" :key="groupIndex" class="card-grid">
          <h4>GRUPO {{ groupIndex + 1 }}</h4>
          <div class="card" v-for="(person, personIndex) in group" :key="personIndex">
            <div class="grid-container">
              <div class="grid-item"><p><b><em>Nombre:</em></b></p> {{ person.nombre }}</div>
              <div class="grid-item"><p><b><em>Apellido:</em></b></p> {{ person.apellido }}</div>
              <div class="grid-item"><p><b><em>email: </em></b></p>{{ person.email }}</div>
              <div class="grid-item"><p><b><em>Front: </em></b></p>{{ person.front }}</div>
              <div class="grid-item"><p><b><em>Back:</em></b></p> {{ person.back }}</div>
              <div class="grid-item"><p><b><em>Bootcamp:</em> </b></p>{{ person.bootcamp }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      groups: []
    };
  },
  methods: {
    async fetchGroups() {
      try {
        const response = await axios.get('http://localhost:4000/api/grupos');
        this.groups = response.data;
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    },
    async downloadCSV() {
    try {
      let csvContent = 'data:text/csv;charset=utf-8,';

      // Recorrer cada grupo
      this.groups.forEach((group, groupIndex) => {
        csvContent += `Grupo ${groupIndex + 1}\n`; // Agregar un encabezado de grupo
        csvContent += 'Nombre,Apellido,Email,Front,Back,Bootcamp\n'; // Agregar encabezados de columnas

        // Recorrer cada persona en el grupo
        group.forEach(person => {
          // Agregar información de la persona al contenido CSV
          csvContent += `${person.nombre},${person.apellido},${person.email},${person.front},${person.back},${person.bootcamp}\n`;
        });

        // Agregar una fila en blanco como separador entre grupos
        csvContent += '\n';
      });

      // Crear un elemento de enlace temporal para descargar el archivo
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'grupos.csv');
      document.body.appendChild(link);

      // Simular un clic en el enlace para iniciar la descarga
      link.click();

      // Eliminar el enlace temporal del documento
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el archivo CSV:', error);
    }
  }
    
  }
};
</script>




  
<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 2rem;
  height: 100%;
  width: auto;
  padding-bottom:4rem ;
}
.card-grid {
  width: 48%;
  border: 0.1rem solid black;
  border-radius: 1rem;
  opacity: 0.5;
  padding: 1rem;
  margin-bottom: 2rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.card {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

}
.grid-item {
  text-align: center;
}

.button-view{
  background-color: #09ea51; 
    border: none;
    color: white;
    padding: 0.625rem 1.25rem;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0.25rem 0.125rem;
    cursor: pointer;
    border-radius: 0.25rem;
}
</style>