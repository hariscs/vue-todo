import type { User } from '@/types'
import { defineStore } from 'pinia'
import { login, logout, register } from '@/utils'

export const useUserAuthStore = defineStore('user auth', {
  state: () => ({
    user: null as User | null,
    success: null as string | null,
    error: null as string | null,
  }),
  actions: {
    async setLogin(user: User) {
      this.error = null
      try {
        const data = await login(user)
        this.user = data.user
        localStorage.setItem('token', data.user.token as string)
        this.error = null
        this.success = 'Logged in successfully'
      } catch (error) {
        this.error = 'Error logging in'
        console.log(error)
      }
    },
    async setLogout() {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          await logout(token)
          this.user = null
          localStorage.removeItem('token')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async setRegister(user: User) {
      this.error = null
      try {
        await register(user)
        this.error = null
        this.success = 'Registerd successfully'
      } catch (error) {
        this.error = 'Error registering'
        this.success = null
        console.log(error)
      }
    },
  },
  getters: {
    getIsUserLoggedIn(): boolean {
      return !!localStorage.getItem('token')
    },
  },
})
