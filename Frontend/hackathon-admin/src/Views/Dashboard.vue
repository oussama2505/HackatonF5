<template>
  <Header />
  <div>
    <h1>Dashboard del Administrador</h1>
    <UploadForm @fileParsed="handleFileParsed" />
    <div v-if="participants.length > 0">
      <h3>Datos del CSV:</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Bootcamp</th>
            <th>Frontend</th>
            <th>Backend</th>
            <!-- Agrega más columnas según la estructura de tu CSV -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in participants" :key="index">
            <td>{{ row.nombre }}</td>
            <td>{{ row.apellido }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.bootcamp }}</td>
            <td>{{ row.frontend }}</td>
            <td>{{ row.backend }}</td>
            
            
            
            

            <!-- Agrega más celdas según la estructura de tu CSV -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Footer />
</template>

<script>
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import UploadForm from '@/components/UploadForm.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    UploadForm,
  },
  setup() {
    const participants = ref([]);

    const handleFileParsed = (data) => {
      participants.value = data;
    };

    return {
      participants,
      handleFileParsed,
    };
  },
});
</script>