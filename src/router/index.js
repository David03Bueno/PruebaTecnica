import { createRouter, createWebHistory } from 'vue-router';
import Productos from '@/view/Productos.vue';

const routes = [
    {
      path: '/',
      name: 'Productos',
      component: Productos
    },

  
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  