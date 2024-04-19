<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserTodosStore } from '@/stores/user-todos'
import type { Todo } from '@/types'
import { getTodoById } from '@/utils'

const todo = ref<Todo | null>(null)
const router = useRouter()
const route = useRoute()
const store = useUserTodosStore()
const id = route.params.id as string

onMounted(async () => {
  todo.value = await getTodoById(id)
})

const title = computed({
  get: () => todo.value?.title || '',
  set: (value: string) => {
    if (todo.value) {
      todo.value.title = value
    }
  },
})

const description = computed({
  get: () => todo.value?.description || '',
  set: (value: string) => {
    if (todo.value) {
      todo.value.description = value
    }
  },
})

const submit = () => {
  store.setUpdateTodoById(id, {
    title: title.value,
    description: description.value,
  })
  if (store.error) {
    return
  } else {
    router.push('/todos')
  }
}
</script>
<template>
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-4">Update Todo</h2>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          v-model="title"
          id="title"
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
          v-model="description"
          id="description"
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
