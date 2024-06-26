<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserTodosStore } from '@/stores/user-todos'

const store = useUserTodosStore()

onMounted(() => {
  store.setTodos()
})

const search = ref('')
const router = useRouter()

const filteredTodos = computed(() => {
  if (!search.value) {
    return store.getTodos
  }
  return store.getTodos.filter((todo) =>
    todo.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const deleteTodo = (id: string) => {
  store.setRemoveTodo(id)
}
</script>

<template>
  <div class="container mx-auto px-4 my-8">
    <h2 class="text-2xl font-bold mb-4 text-center">Todos</h2>
    <router-link
      to="/todos/create"
      class="inline-block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow hover:shadow-lg hover:bg-blue-700 focus:outline-none"
    >
      Create new Todo
    </router-link>

    <div v-if="store.getTodos.length" class="flex flex-col mt-8">
      <input
        v-model="search"
        type="text"
        placeholder="Search Todos"
        class="mb-4 w-full border px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
      />
      <div
        v-for="todo in filteredTodos"
        :key="todo?.id"
        class="mb-4 p-4 rounded shadow-lg bg-white"
      >
        <h3 class="text-xl">{{ todo?.title }}</h3>
        <p>{{ todo?.description }}</p>
        <div class="mt-4">
          <router-link
            :to="`/todos/${todo?.id}`"
            class="text-blue-500 hover:underline"
          >
            View/Update
          </router-link>
          <button
            @click="deleteTodo(todo.id as string)"
            class="ml-4 text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div v-else class="my-8">
      <p class="text-center">No Todos found</p>
    </div>
  </div>
</template>
