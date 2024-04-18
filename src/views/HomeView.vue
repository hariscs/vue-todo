<script setup lang="ts">
import { ref } from 'vue'

const isLoggedIn = ref(false)

import Welcome from '../components/Welcome.vue'
import HomeView from './TodosView.vue'
</script>
<template>
  <main class="flex items-center justify-center h-screen">
    <Welcome v-if="!isLoggedIn" />
    <HomeView v-else />
  </main>
</template>
