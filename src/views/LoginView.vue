<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const loginErrors = reactive({
  email: '',
  password: '',
})

const submit = () => {
  loginErrors.email = email.value ? '' : 'Email is required'
  loginErrors.password = password.value ? '' : 'Password is required'

  if (loginErrors.email || loginErrors.password) {
    return
  }

  try {
    console.log({ email: email.value, password: password.value })
    loginErrors.email = ''
    loginErrors.password = ''
    router.push('/todos')
  } catch (error) {
    console.log(error)
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
          Login to your account
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
            <div v-if="loginErrors.email" class="text-xs mt-0 text-red-600">
              {{ loginErrors.email }}
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              class="w-full px-3 py-2 border text-sm border-gray-300 text-gray-900 rounded"
              placeholder="Password"
            />
            <div v-if="loginErrors.password" class="text-xs mt-0 text-red-600">
              {{ loginErrors.password }}
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="mt-5 uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>
