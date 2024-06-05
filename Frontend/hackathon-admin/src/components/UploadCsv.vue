<template>
  <div class="upload-file-box">
    <div class="upload-content">

      <i class="fa fa-upload upload-icon"></i>
      <input class="upload-button" type="file" @change="handleFileUpload" />
      <button @click="submitFile"> Upload csv</button>
      <p class="upload-button" v-if="message">{{ message }}</p>
    </div>
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
          this.message = 'please, select a csv file.';
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
            this.message = 'csv loaded successfully.';
          } else {
            this.message = data.error;
          }
        } catch (error) {
          this.message = 'Error loading csv.';
        }
      }
    }
  };
  </script>
  <style scoped>
  /* Aquí puedes agregar tus estilos específicos para este componente */
/* Por ejemplo: */

button {
  background-color: lightblue;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 1rem;
}

.upload-file-box {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40rem; /* Ajusta el tamaño según tus necesidades */
	height: auto; /* Ajusta el tamaño según tus necesidades */
	border: 2px dashed #ccc;
	border-radius: 10px;
	margin: 20px auto;
	text-align: center;
  }
  
  .upload-content {
	display: flex;
	flex-direction: column;
	align-items: center;
  }
  
  .upload-icon {
	font-size: 50rem; /* Tamaño del icono */
	margin-bottom: 20px;
	color: #888; /* Color del icono */
  }
  
  .upload-button {
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
  margin: 1rem;
  }
  
  .upload-button:hover {
	background-color: lightblue;
  }

  
</style>