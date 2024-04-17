import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodosView.vue'),
    },
    {
      path: '/todos/:id',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/todos/create',
      name: 'create-todo',
      component: () => import('../views/CreateTodoView.vue'),
    },
  ],
})

export default router
