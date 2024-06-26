
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import Dashboard from '../Views/Dashboard.vue';
import Groups from '../Views/Groups.vue';
import Login from '../components/Login.vue'; // Importa el componente Login
import About from '../Views/About.vue';
import Contact from '../Views/Contact'

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
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // con esto veo si la ruta necesita verificar con token 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // verifica si tiene un token activo
    const token = localStorage.getItem('token');
    if (!token) {
      // si no se loguea, fuera, al login
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      // si esta logueado, que permita hacer todo.
      next();
    }
  } else {
    // Si la ruta no requiere autenticación, permitir el acceso
    next();
  }
});


export default router;