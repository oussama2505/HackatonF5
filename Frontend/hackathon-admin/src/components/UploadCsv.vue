<template>
  <div class="upload-file-box">
    <div class="upload-content">

      <i class="fa fa-upload upload-icon"></i>
      <input class="upload-button" type="file" @change="handleFileUpload" />
      <button @click="submitFile"> {{ $t('upload.uploadButton') }}</button>
      <p class="upload-button" v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const file = ref(null);
const message = ref('');

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

const submitFile = async () => {
  if (!file.value) {
    message.value = t('upload.selectCSVFile');
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    const response = await fetch('http://localhost:4000/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      message.value = t('upload.successfulUpload');
    } else {
      message.value = data.error;
    }
  } catch (error) {
    message.value = t('upload.errorUpload');
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
  border-radius: 5px;
}

button:hover {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 1rem;
  border-radius: 5px;
}

.upload-file-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%; /* Ajusta el tamaño según tus necesidades */
  min-height:30rem ; /* Ajusta el tamaño según tus necesidades */
  border: 2px dashed #ccc;
  border-radius: 10px;
  margin: 9% auto;
  text-align: center;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-icon {
  font-size: 80rem; /* Tamaño del icono */
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
