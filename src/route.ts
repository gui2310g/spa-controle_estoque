import { createRouter, createWebHistory } from 'vue-router';
import User from './pages/user/User.vue';
import Admin from './pages/admin/Admin.vue';

const routes = [
  { path: '/', component: User },
  { path: '/admin', component: Admin }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
