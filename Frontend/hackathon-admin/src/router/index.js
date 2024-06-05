
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import Dashboard from '../Views/Dashboard.vue';
import Groups from '../Views/Groups.vue';
import Login from '../components/Login.vue'; // Importa el componente Login

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // Indica que esta ruta requiere autenticación
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // Verificar si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verificar si el usuario está autenticado (tiene un token JWT)
    const token = localStorage.getItem('token');
    if (!token) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      // Si el usuario está autenticado, permitir el acceso a la ruta
      next();
    }
  } else {
    // Si la ruta no requiere autenticación, permitir el acceso
    next();
  }
});

export default router;