<template>
  <div class="upload-file-container">
    <div class="upload-file-box" @drop.prevent="handleDrop" @dragover.prevent>
      <div class="upload-content">
        <i class="fa fa-upload upload-icon"></i>
        <input class="upload-button" type="file" @change="handleFileUpload" />
        <button class="upload-button" @click="submitFile"> {{ $t('upload.uploadButton') }}</button>
        <p class="upload-message" v-if="message">{{ message }}</p>
      </div>
    </div>
    <div class="csv-preview" v-if="csvData.length > 0">
      <table class="mb-12">
        <thead>
          <tr>
            <th v-for="(header, index) in csvData[0]" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in csvData.slice(1)" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
    <ArrowUp />
  </div>
</template>
<script setup>
import ArrowUp from './ArrowUp.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Papa from 'papaparse';

const { t } = useI18n();

const file = ref(null);
const message = ref('');
const csvData = ref([]);

const handleFileUpload = (event) => {
  const uploadedFile = event.target.files[0];
  if (uploadedFile) {
    file.value = uploadedFile;
    parseCSV(uploadedFile);
  }
};

const handleDrop = (event) => {
  const droppedFile = event.dataTransfer.files[0];
  if (droppedFile) {
    file.value = droppedFile;
    parseCSV(droppedFile);
  }
};

const parseCSV = (file) => {
  Papa.parse(file, {
    complete: (results) => {
      csvData.value = results.data;
    },
    header: false,
  });
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
.upload-file-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  width: 80%; /* Ajusta el tamaño según tus necesidades */
  flex-wrap: wrap; /* Permitir flex wrap para ajustar los elementos */
}

.upload-file-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%; /* Ajusta el tamaño según tus necesidades */
  min-height: 30rem;
  border: 2px dashed #ccc;
  border-radius: 10px;
  margin: 2rem 0;
  text-align: center;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-icon {
  font-size: 4rem; /* Tamaño del icono */
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

.upload-message {
  font-size: large;
  color: red;
  font-weight: bold;
}

.csv-preview {
  width: 45%;
  overflow-x: auto;
  margin: 2rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

/* Media Queries */
@media (max-width: 1024px) {
  .upload-file-container {
    flex-direction: column;
    align-items: center;
  }

  .upload-file-box,
  .csv-preview {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .upload-file-box,
  .csv-preview {
    width: 100%;
    margin: 1rem 0;
  }

  .upload-icon {
    font-size: 3rem; /* Ajusta el tamaño del icono */
  }

  .upload-button {
    padding: 8px 16px; /* Ajusta el tamaño del botón */
  }

  .upload-message {
    font-size: medium;
  }
}
</style>
