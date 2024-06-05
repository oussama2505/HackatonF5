import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Views/Home.vue';
import Dashboard from '../Views/Dashboard.vue';
import Groups from '../Views/Groups.vue';
import UploadCsv from '../components/UploadCsv.vue'; // Import the new component

const routes = [
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  /* {
    path: '/upload',
    name: 'UploadCsv',
    component: UploadCsv
  } */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
