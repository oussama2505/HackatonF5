<template>
  <div class="flex flex-col min-h-full">
    <Header />
    <main class="flex-grow">
      <GroupsButton />
      <ClearTableButton />
      <TeamDetail />
      
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import TeamDetail from '../components/TeamDetail.vue';
import GroupsButton from '../components/GroupsButton.vue';
import ClearTableButton from '../components/ClearTableButton.vue';
</script>
