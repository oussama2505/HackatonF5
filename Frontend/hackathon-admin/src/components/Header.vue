<template>
  <nav class="bg-light-gray border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <!-- Logo and tittle -->

      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {{ $t('header.title') }}
        </span>
      </router-link>

      <!-- This is the link to the views -->

      <div class="flex items-center space-x-4 md:order-1">
        <router-link to="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white">{{ $t('header.home') }}</router-link>
        <router-link to="/dashboard" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white">{{ $t('header.dashboard') }}</router-link>
        <router-link to="/groups" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-white">{{ $t('header.groups') }}</router-link>
      </div>

      <!-- Button that displays languages-->

      <div class="relative md:order-2">
        <button
          type="button"
          @click="toggleDropdown"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!-- Icon on the language button -->
            <!-- Add your SVG icon here -->
          </svg>
          <span>{{ $t('language') }}</span>
          <svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <!-- Menú de idiomas -->
        <div
          v-show="isDropdownOpen"
          class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300"
        >
          <ul class="py-1">
            <li><a href="#" @click.stop.prevent="changeLanguage('en')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a></li>
            <li><a href="#" @click.stop.prevent="changeLanguage('es')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('language', lang);
    }
  },
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
