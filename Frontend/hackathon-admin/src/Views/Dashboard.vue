<template>
    <div>
      <h1>Dashboard del Administrador</h1>
      <upload-form></upload-form>
      <teams-list></teams-list>
    </div>
  </template>
  

  <script>
  import UploadForm from '../components/UploadForm.vue';
  import TeamsList from '../components/TeamsList.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      UploadForm,
      TeamsList
    }
  };
  </script>
  
