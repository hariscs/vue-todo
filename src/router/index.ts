import { createRouter, createWebHistory } from 'vue-router'
import { useUserAuthStore } from '@/stores/user-auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
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
      meta: { requiresAuth: true },
    },
    {
      path: '/todos/:id',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/todos/create',
      name: 'create-todo',
      component: () => import('../views/CreateTodoView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  //   check if the route requires authentication and the user is not logged in
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !useUserAuthStore().getIsUserLoggedIn
  ) {
    next({ name: 'welcome' })
  } else {
    next()
  }
})

export default router
