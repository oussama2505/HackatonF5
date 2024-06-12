<template>
    <div>
      <button class="clear-button" @click="clearTable">{{$t('buttons.deleteAll')}}</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async clearTable() {
        try {
          const response = await axios.delete('http://localhost:4000/api/clear');
          /* alert(response.data.message); */
          location.reload();
        } catch (error) {
          console.error('Error clearing table:', error);
          alert('There was an error clearing the table.');
        }
      }
    }
  };

  
  </script>
  
  <style scoped>
  .clear-button {
    background-color: #f44336; 
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  </style>
  