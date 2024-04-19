<script setup lang="ts">
import Welcome from '@/components/Welcome.vue'
import HomeView from './TodosView.vue'
import { useUserAuthStore } from '@/stores/user-auth'

const store = useUserAuthStore()
</script>
<template>
  <main class="flex items-center justify-center h-screen">
    <Welcome v-if="!store.user" />
    <HomeView v-else />
  </main>
</template>
