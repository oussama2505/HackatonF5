<template>
    <div class="container">
      <div class="card-grid" v-for="n in 3" :key="n">
        <div class="card" v-for="(item, index) in items" :key="index">
          <div class="grid-container">
            <div class="grid-item">{{ item.nombre }}</div>
            <div class="grid-item">{{ item.email }}</div>
            <div class="grid-item">{{ item.front }}</div>
            <div class="grid-item">{{ item.back }}</div>
            <div class="grid-item">{{ item.bootcamp }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardGrid',
    data() {
      return {
        items: Array(7).fill().map(() => ({
          nombre: '',
          email: '',
          front: '',
          back: '',
          bootcamp: ''
        }))
      }
    }
  }
  </script>
  
  <style scoped>

  .container {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding-top: 8rem;
  }
  .card-grid {
    width: 30%;
    height: 25rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
    opacity: 0.5;
    padding: 1rem;
    overflow: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .card {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

  }
  .grid-item {
    text-align: center;
  }
  </style>
  