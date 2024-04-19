import type { Todo } from '@/types'
import { addTodo, getTodos, removeTodoById, updateTodoById } from '@/utils'
import { defineStore } from 'pinia'

export const useUserTodosStore = defineStore('user todos', {
  state: () => ({
    todos: [] as Todo[],
    error: null as string | null,
    success: null as string | null,
  }),
  actions: {
    async setTodos() {
      this.error = null
      try {
        const data = await getTodos()
        this.todos = data.items.data
        this.error = null
        this.success = 'success'
      } catch (error) {
        this.error = 'Error getting todos'
        console.log(error)
      }
    },
    async setAddTodo(todo: Todo) {
      this.error = null
      try {
        const data = await addTodo(todo)
        console.log('set todo', data)
        this.error = null
        this.success = 'added todo'
        this.todos.push(todo)
      } catch (error) {
        this.error = 'Error adding todo'
        console.log(error)
      }
    },
    async setRemoveTodo(id: string) {
      this.error = null
      try {
        const data = await removeTodoById(id)
        this.error = null
        this.success = 'removed todo'
        this.todos = this.todos.filter((t) => t.id !== id)
      } catch (error) {
        this.error = 'Error removing todo'
        console.log(error)
      }
    },
    async setUpdateTodoById(id: string, updatedTodo: Todo) {
      this.error = null
      try {
        const data = await updateTodoById(id, updatedTodo)
        this.error = null
        this.success = 'updated todo'
        const index = this.todos.findIndex((t) => t.id === id)
        this.todos[index] = updatedTodo
      } catch (error) {
        this.error = 'Error updating todo'
        console.log(error)
      }
    },
  },
  getters: {
    getTodos(): Todo[] | [] {
      return this.todos || []
    },
  },
})
