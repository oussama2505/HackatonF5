<template>
  <div class="flex flex-col min-h-full">
    <Header />
    <main class="flex-grow">

      <div class="content-buttons">
        <!-- <ClearTableButton /> -->
        <ArrowUp />
        <TeamDetail />
      </div>
      
      
    </main>
    <Footer />
  </div>
  
  
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import TeamDetail from '../components/TeamDetail.vue';
import ClearTableButton from '../components/ClearTableButton.vue';
import ArrowUp from '../components/ArrowUp.vue';
</script>

<style scoped>

.content-buttons{
  width: 100%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 2rem;
}
</style>
