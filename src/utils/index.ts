import type { User } from '@/types'
import axios from 'axios'

export async function login(user: User) {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/login`,
    user
  )
  return response.data
}

export async function logout(token: string) {
  await axios.post(
    `${import.meta.env.VITE_BASE_URL}/logout`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
}

export async function register(user: User) {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/register`,
    user
  )
  return response.data
}
