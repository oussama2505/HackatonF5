<template>
  <div class="containerGral">
    <button class="button-view" @click="fetchGroups">Mostrar Grupos</button>
    <div v-if="groups.length">
      <h3>Grupos</h3>
      <div class="container">
        <div v-for="(group, groupIndex) in groups" :key="groupIndex" class="card-grid">
          <h4>Grupo {{ groupIndex + 1 }}</h4>
          <div class="card" v-for="(person, personIndex) in group" :key="personIndex">
            <div class="grid-container">
              <div class="grid-item">{{ person.nombre }}</div>
              <div class="grid-item">{{ person.apellido }}</div>
              <div class="grid-item">{{ person.email }}</div>
              <div class="grid-item">{{ person.front }}</div>
              <div class="grid-item">{{ person.back }}</div>
              <div class="grid-item">{{ person.bootcamp }}</div>
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
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 2rem;
  height: 100vw;
  width: auto;
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
