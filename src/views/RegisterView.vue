<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { useUserAuthStore } from '@/stores/user-auth'
const store = useUserAuthStore()

const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const router = useRouter()
const RegisterErrors = reactive({
  email: '',
  password: '',
  passwordConfirmation: '',
})

const submit = async () => {
  RegisterErrors.email = email.value ? '' : 'Email is required'
  RegisterErrors.password = password.value ? '' : 'Password is required'
  RegisterErrors.passwordConfirmation = password_confirmation.value
    ? ''
    : 'Password confirmation is required'

  if (password.value !== password_confirmation.value) {
    RegisterErrors.passwordConfirmation = 'Password does not match'
    return
  }
  if (RegisterErrors.email || RegisterErrors.password) {
    return
  }

  const user = {
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  }
  await store.setRegister(user)
  RegisterErrors.email = ''
  RegisterErrors.password = ''
  if (store.error) {
    return
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register your account
        </h2>
      </div>
      <form class="mt-8" @submit.prevent="submit">
        <div class="rounded-md shadow-sm">
          <div class="mb-2">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
              class="w-full px-3 py-2 border text-sm border-gray-300 text-gray-900 rounded"
              placeholder="Email address"
            />
            <div v-if="RegisterErrors.email" class="text-xs mt-0 text-red-600">
              {{ RegisterErrors.email }}
            </div>
          </div>
          <div class="mb-2">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              class="w-full px-3 py-2 border text-sm border-gray-300 text-gray-900 rounded"
              placeholder="Password"
            />
            <div
              v-if="RegisterErrors.password"
              class="text-xs mt-0 text-red-600"
            >
              {{ RegisterErrors.password }}
            </div>
          </div>
          <div>
            <label for="passwordConfirmation" class="sr-only"
              >Password Confirmation</label
            >
            <input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              v-model="password_confirmation"
              class="w-full px-3 py-2 border text-sm border-gray-300 text-gray-900 rounded"
              placeholder="Password Confirmation"
            />
            <div
              v-if="RegisterErrors.passwordConfirmation"
              class="text-xs mt-0 text-red-600"
            >
              {{ RegisterErrors.passwordConfirmation }}
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="mt-5 uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
