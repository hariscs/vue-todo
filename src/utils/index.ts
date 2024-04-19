import type { Todo, User } from '@/types'
import axios from 'axios'

const token = localStorage.getItem('token')

export async function login(user: User) {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/login`,
    user
  )
  return response.data
}

export async function logout(token: string) {
  await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/logout`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
}

export async function register(user: User) {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/register`,
    user
  )
  return response.data
}

export async function getTodos() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/items`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
  return response.data
}

export async function getTodoById(id: string) {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/item/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return response.data.item
}

export async function addTodo(todo: Todo) {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/item`,
    todo,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  return response.data
}

export async function removeTodoById(id: string) {
  await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/item/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export async function updateTodoById(id: string, updatedTodo: Todo) {
  await axios.put(
    `${import.meta.env.VITE_API_BASE_URL}/item/${id}`,
    updatedTodo,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
}
