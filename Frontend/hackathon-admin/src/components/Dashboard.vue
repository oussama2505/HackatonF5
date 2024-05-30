<template>
    <div>
      <h1>Dashboard del Administrador</h1>
      <upload-form></upload-form>
      <teams-list></teams-list>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import UploadForm from './UploadForm.vue';
  import TeamsList from './TeamsList.vue';
  
  export default defineComponent({
    name: 'Dashboard',
    components: {
      UploadForm,
      TeamsList
    }
  });
  </script>
  