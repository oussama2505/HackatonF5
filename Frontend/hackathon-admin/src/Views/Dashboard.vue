<template>
     <Header />
    <div>
      <h1>Dashboard del Administrador</h1>
      <upload-form></upload-form>
      <teams-list></teams-list>
    </div>
    <Footer />
  </template>
  

  <script setup>
  import UploadForm from '../components/UploadForm.vue';
  import TeamsList from '../components/TeamsList.vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  </script>
  
