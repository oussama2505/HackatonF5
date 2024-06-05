<template>
    <div>
      <!-- <button @click="fetchGroups">Mostrar Grupos</button> -->
      <div v-if="groups.length">
        <h3>Grupos</h3>
        <div class="container">
        <div class="card-grid" v-for="n in 1" :key="n" >
        <div class="card" >
        <div v-for="(group, index) in groups" :key="index">
          <h4>Grupo {{ index + 1 }}</h4>

          <div v-for="person in group" :key="person.id" class="grid-container">
            <div class="grid-item">{{ person.nombre }}</div>
            <div class="grid-item">{{ person.email }}</div>
            <div class="grid-item">{{ person.front }}</div>
            <div class="grid-item">{{ person.back }}</div>
            <div class="grid-item">{{ person.bootcamp }}</div>
          </div>
          <!-- <ul>
            <li v-for="person in group" :key="person.id">
              {{ person.nombre }} {{ person.apellido }} - Front: {{ person.front }}, Back: {{ person.back }}, Email: {{ person.email }}, Bootcamp: {{ person.bootcamp }}
            </li>
          </ul> -->
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
      }
    }
  };
  </script>
  
  
  <style scoped>

.container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 8rem;
  width: 100%;
}
.card-grid {
  width: 45%;
  height: 25rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
  opacity: 0.5;
  padding: 1rem;
  overflow: auto;
  display: flex;
  justify-content: center;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

}
.grid-item {
  text-align: center;
}
</style>

  