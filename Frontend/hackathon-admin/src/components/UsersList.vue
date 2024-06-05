<template>
    <div class="users-list">
      <h2>Usuarios</h2>
      <ul v-if="users.length > 0">
        <li v-for="user in users" :key="user.id">
          {{ user['nombre'] }} {{ user['apellido'] }} - Front: {{ user['front'] }}, Back: {{ user['back'] }}, Email: {{ user['emial'] }}, Bootcamp: {{ user['bootcamp'] }}
        </li>
      </ul>
      <p v-else>No hay usuarios registrados.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UsersList',
    data() {
      return {
        users: [],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await fetch('http://localhost:4000/api/grupos');
          const data = await response.json();
          this.users = data;
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>