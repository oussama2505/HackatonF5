<template>
    <div>
      <h3>{{ team.name }}</h3>
      <p>{{ team.description }}</p>
      <ul>
        <li v-for="participant in team.participants" :key="participant.id">
          {{ participant.name }} ({{ participant.stack }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { defineProps } from 'vue';
  
  export default {
    name: 'TeamDetail',
    props: {
      team: Object
    },
    setup(props) {
      return {
        team: props.team
      };
    }
  };
  </script>
  