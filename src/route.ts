import { createRouter, createWebHistory } from 'vue-router';
import User from './pages/user/User.vue';

const routes = [
  { path: '/', component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
