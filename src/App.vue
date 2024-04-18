<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
function logout() {
  // localStorage.removeItem('user')
  // router.push('/')
}
</script>

<template>
  <nav class="flex py-4 container mx-auto items-center justify-between">
    <h1 class="text-2xl font-bold">786 Todo App</h1>
    <ul class="flex gap-4 justify-between">
      <li>
        <RouterLink active-class="font-bold transition-all" to="/"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink active-class="font-bold transition-all" to="/todos/create">
          Create Todo
        </RouterLink>
      </li>
    </ul>
    <button
      @click="logout"
      class="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow-md"
    >
      Logout
    </button>
  </nav>
  <RouterView />
</template>
