import type { Todo } from '@/types'
import { defineStore } from 'pinia'

export const useUserTodosStore = defineStore('user todos', {
  state: () => ({
    todos: [] as Todo[],
    error: null as string | null,
    success: null as string | null,
  }),
  actions: {
    setTodos(todos: Todo[]) {
      this.todos = todos
    },
    setAddTodo(todo: Todo) {
      this.todos.push(todo)
    },
    setRemoveTodo(todo: Todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
    setUpdateTodoById(id: string, updatedTodo: Todo) {
      const index = this.todos.findIndex((t) => t.id === id)
      this.todos[index] = updatedTodo
    },
  },
  getters: {
    getTodos(): Todo[] | [] {
      return this.todos || []
    },
    getTodoById(id: string): Todo | null {
      return this.todos.find((t) => t.id === id) || null
    },
  },
})
