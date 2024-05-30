<template>
    <div>
      <h2>Subir Archivo CSV</h2>
      <input type="file" @change="onFileChange" />
      <button @click="uploadFile">Subir</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'UploadForm',
    setup() {
      const selectedFile = ref(null);
  
      const onFileChange = (event) => {
        selectedFile.value = event.target.files[0];
      };
  
      const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', selectedFile.value);
  
        fetch('/upload-csv', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };
  
      return {
        onFileChange,
        uploadFile
      };
    }
  };
  </script>
  