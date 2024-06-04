<template>
  <Header />
  <div>
    <h1>Dashboard del Administrador</h1>
    <GroupsButton />  <!-- Aquí agregamos el botón para mostrar los grupos -->
    <ClearTableButton />
    <UploadForm @fileParsed="handleFileParsed"/>
    <TeamsList :participants="participants"/>
  </div>
  <Footer />
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