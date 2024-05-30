<template>
    <div>
      <h2>Lista de Equipos</h2>
      <ul>
        <li v-for="team in teams" :key="team.id">
          <team-detail :team="team"></team-detail>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import TeamDetail from './TeamDetail.vue';
  
  export default {
    name: 'TeamsList',
    components: {
      TeamDetail
    },
    setup() {
      const teams = ref([]);
  
      onMounted(() => {
        fetch('/teams')
          .then(response => response.json())
          .then(data => {
            teams.value = data;
          });
      });
  
      return {
        teams
      };
    }
  };
  </script>
  