<template>
    <div class="login-container">
      <h2>Login Administrador</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Usuario</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Login',
    setup() {
      const username = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const router = useRouter();
  
      const login = async () => {
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username.value, password: password.value })
          });
  
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
          } else {
            errorMessage.value = data.message || 'Error de autenticación';
          }
        } catch (error) {
          errorMessage.value = 'Error de red';
        }
      };
  
      return {
        username,
        password,
        errorMessage,
        login
      };
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  