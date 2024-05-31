<template>
    <div class="login-container">
      <h2>Login Administrador</h2>
      <form>
        <div>
          <label for="username">Usuario</label>
          <input type="text" id="username"  required />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" id="password"  required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>error message</p>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Login'
    
  };
  </script>
  

  