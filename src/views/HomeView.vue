<script setup lang="ts"></script>
<template>
  <main class="flex items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="text-4xl mb-4">Welcome!</h1>
      <p class="text-xl">
        Welcome to the <span class="font-bold text-green-600">786</span> Todo
        App
      </p>

      <div class="flex flex-col gap-4">
        <router-link
          to="/login"
          class="mt-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-600 uppercase transition bg-white rounded shadow ripple hover:shadow-lg focus:outline-none"
        >
          Login
        </router-link>
        <div class="flex flex-col">
          <p class="text-lg mt-4">New here? Sign up to get started.</p>
          <router-link
            to="/register"
            class="mt-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-600 rounded shadow ripple hover:shadow-lg focus:outline-none"
          >
            Sign Up
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
