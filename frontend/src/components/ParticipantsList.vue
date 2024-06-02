<template>
    <div>
      <h2>Lista de participantes:</h2>
      <ul>
        <li v-for="participant in participants" :key="participant.id">
          {{ participant.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      participants: Array
    }
  }
  </script>
  