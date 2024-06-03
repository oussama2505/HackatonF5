<!-- Dashboard.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow">
      <h1>Dashboard del Administrador</h1>
      <UploadForm @fileParsed="handleFileParsed"/>
      <TeamsList :participants="participants"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import UploadForm from '@/components/UploadForm.vue';
import TeamsList from '@/components/TeamsList.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    UploadForm,
    TeamsList,
  },
  setup() {
    const participants = ref([]);

    const handleFileParsed = (data) => {
      participants.value = data;
    };

    return {
      participants,
      handleFileParsed,
    };
  },
});
</script>
