<template>
  <footer class="fixed bottom-0 left-0 bg-beige shadow p-4 dark:bg-gray-800 w-full mt-6">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <span class="text-sm text-gray-500 dark:text-gray-400">
        {{ $t('footer.copyright') }} <a href="/" class="hover:underline">Hackaton F5</a>. {{ $t('footer.all_rights_reserved') }}.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0">
        <li><router-link to="/about" class="hover:underline me-4 md:me-6">{{ $t('footer.aboutUs') }}</router-link></li>
        <li><a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.privacy_policy') }}</a></li>
        <li><a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.licensing') }}</a></li>
        <li><a href="#" class="hover:underline">{{ $t('footer.contact') }}</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
