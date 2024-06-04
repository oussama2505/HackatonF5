<template>
    <div>
      <button @click="fetchGroups">Mostrar Grupos</button>
      <div v-if="groups.length">
        <h3>Grupos</h3>
        <div v-for="(group, index) in groups" :key="index" class="group">
          <h4>Grupo {{ index + 1 }}</h4>
          <ul>
            <li v-for="person in group" :key="person.id">
              {{ person.nombre }} {{ person.apellido }} - Front: {{ person.front }}, Back: {{ person.back }}, Email: {{ person.email }}, Bootcamp: {{ person.bootcamp }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import GroupsButton from '../components/GroupsButton.vue';
  import ClearTableButton from '../components/ClearTableButton.vue';
  
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
  
  <style>
  .group {
    margin-bottom: 20px;
  }
  </style>
  
  