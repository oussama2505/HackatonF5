<template>
    <div>
      <h2>Cargar Archivo CSV</h2>
      <input type="file" @change="handleFileUpload" />
      <button @click="submitFile"> Cargar </button>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        file: null,
        message: ''
      };
    },
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      async submitFile() {
        if (!this.file) {
          this.message = 'Por favor, seleccione un archivo CSV.';
          return;
        }
  
        const formData = new FormData();
        formData.append('file', this.file);
  
        try {
          const response = await fetch('http://localhost:4000/api/upload', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          if (response.ok) {
            this.message = 'Archivo cargado correctamente.';
          } else {
            this.message = data.error;
          }
        } catch (error) {
          this.message = 'Error al cargar el archivo.';
        }
      }
    }
  };
  </script>
  