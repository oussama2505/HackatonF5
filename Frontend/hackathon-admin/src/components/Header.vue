<template>
  <nav class="bg-beige border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <!-- Logo and title -->
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {{ $t('header.title') }}
        </span>
      </router-link>

      <!-- Toggle button for mobile menu -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-700 dark:text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Links and Logout button -->
      <div :class="{'hidden': !isMobileMenuOpen, 'block': isMobileMenuOpen}" class="w-full md:flex md:w-auto md:order-1">
        <router-link to="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white">{{ $t('header.home') }}</router-link>
        <router-link to="/dashboard" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white">{{ $t('header.dashboard') }}</router-link>
        <router-link to="/groups" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white">{{ $t('header.groups') }}</router-link>
        <button @click="logout" class="block w-full md:inline md:w-auto justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">{{$t('header.logout')}}</button>
      </div>

      <!-- Language button and dropdown -->
      <div class="relative md:order-2">
        <button
          type="button"
          @click="toggleDropdown"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!-- Add your SVG icon here -->
          </svg>
          <span>{{ $t('header.language') }}</span>
          <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <!-- Language dropdown menu -->
        <div
          v-show="isDropdownOpen"
          @click.away="closeDropdown"
          class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300"
        >
          <ul class="py-1 flex">
            <li><a href="#" @click.stop.prevent="changeLanguage('en')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <img :src="englishImage" alt="English" class="w-4 h-4 mr-2">
              English</a></li>
            <li><a href="#" @click.stop.prevent="changeLanguage('es')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <img :src="spanishImage" alt="Español" class="w-4 h-4 mr-2">
              Español</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const i18n = useI18n(); // Call useI18n at the top of setup
const { t } = i18n;
const englishImage = ref(require('@/assets/bandera-england.png'));
const spanishImage = ref(require('@/assets/bandera-spain.png'));
const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const changeLanguage = (lang) => {
  i18n.locale.value = lang; // Access locale from useI18n result
  localStorage.setItem('language', lang);
  closeDropdown();
};

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const clickAwayHandler = (event) => {
  if (!event.target.closest('.relative')) {
    closeDropdown();
  }
};
</script>


<style scoped>
/* Estilo para mejorar la animación */
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.dropdown-enter, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>