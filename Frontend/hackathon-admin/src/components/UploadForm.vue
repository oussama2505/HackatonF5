<template>
    <div>
      <h2>Subir Archivo CSV</h2>
      <input type="file" />
      <button>Subir</button>
    </div>
  </template>
  
  <script>
  import UploadForm from '@/components/UploadForm.vue';

 export default {
  components: {
    UploadForm
  }
};

  </script>
  