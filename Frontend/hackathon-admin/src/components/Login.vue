<template>
  <div class="flex min-h-0 mb-5 mt-20 flex-col justify-center px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" :src="logo" alt="Logo">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ t('login.title') }}</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{ t('login.email') }}</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required :placeholder="t('login.emailPlaceholder')" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <p v-if="!email" class="text-sm text-red-500">{{ t('login.emailRequired') }}</p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">{{ t('login.password') }}</label>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required :placeholder="t('login.passwordPlaceholder')" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <p v-if="!password" class="text-sm text-red-500">{{ t('login.passwordRequired') }}</p>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ t('login.signIn') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const email = ref('');
const password = ref('');

const logo = require('../assets/logo.png');

const login = async () => {
  if (!email.value || !password.value) {
    return; // Impide el envío del formulario si los campos están vacíos
  }
  try {
    const response = await axios.post('http://localhost:4000/api/login', {
      email: email.value,
      password: password.value
    });
    localStorage.setItem('token', response.data.access_token);
    // Redirigir a una página protegida
    // router.push('/dashboard');
  } catch (error) {
    alert(t('login.invalidCredentials'));
  }
};
</script>
