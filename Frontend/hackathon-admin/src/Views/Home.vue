<template>
    <Header />
    <Login />
    <GroupsButton />  <!-- Este es el boton para mostrar los grupos-->
    <ClearTableButton /> <!-- Este el boton para borrar la tabla entera de la base de datos. -->
    <Footer />
  </template>
  
  <script setup>
  import Header from '../components/Header.vue';
  import Login from '../components/Login.vue';
  import Footer from '../components/Footer.vue';
  import GroupsButton from '../components/GroupsButton.vue'; /* Esta es la importacion del componente */
  import ClearTableButton from '../components/ClearTableButton.vue';
  </script>
  
  