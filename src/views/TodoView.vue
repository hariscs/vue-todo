<template>
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-4">Update Todo</h2>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          id="title"
          v-model="title"
          type="text"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label
          for="description"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          Description:
        </label>
        <textarea
          id="description"
          v-model="description"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Todo
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const description = ref('')
const router = useRouter()

const submit = () => {
  console.log('submit')
  try {
    router.push('/todos')
  } catch (error) {
    console.log(error)
  }
}
</script>
