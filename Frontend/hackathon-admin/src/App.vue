<template>
  <div>
    <h1>Grupos de Personas</h1>
    <div v-for="(grupo, index) in grupos" :key="index" class="grupo">
      <h2>Grupo {{ index + 1 }}</h2>
      <ul>
        <li v-for="persona in grupo" :key="persona.id">
          {{ persona.nombre }} - {{ persona.apellido }} - {{ persona.front }} - {{ persona.back }} - {{ persona.email }} - {{ persona.bootcamp }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      grupos: []
    };
  },
  created() {
    axios.get('http://localhost:4000/api/grupos')
      .then(response => {
        this.grupos = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style>
.grupo {
  margin-bottom: 20px;
}
</style>
