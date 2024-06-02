<!-- <template>
    <div>
      <input type="file" @change="handleFileUpload">
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
  
        fetch('http://localhost:4000/upload', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    }
  }
  </script> -->

  <template>
    <div>
      <input type="file" @change="handleFileUpload">
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
  
        fetch('http://localhost:4000/api/upload', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del backend
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    }
  }
  </script>
  