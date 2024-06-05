<template>
  <Header />
  <div>
    <UploadCsv />
  </div>
  <Footer />
</template>

<script>
import { defineComponent, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import UploadCsv from '../components/UploadCsv.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    UploadCsv 
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
