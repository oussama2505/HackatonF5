<template>
    <button @click="scrollToTop" class="scroll-top-button" :class="{ 'show-scroll-button': showScrollButton }" title="Go to top">
          <font-awesome-icon icon="arrow-up" class="fa-2x"/>
    </button>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const showScrollButton = ref(false);
// Función para hacer scroll hacia arriba
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
// Función que muestra u oculta el botón de volver arriba según la posición del scroll
const handleScroll = () => {
  if (window.scrollY > 300) { // Cambia 300 por la posición deseada para mostrar el botón
    showScrollButton.value = true;
  } else {
    showScrollButton.value = false;
  }
};

// Añade un listener para el evento scroll al montar el componente
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Elimina el listener cuando el componente se desmonta
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-top-button {
  display: none; 
  position: fixed;
  bottom: 80px;
  right: 40px;
  z-index: 999;
  background-color: #09ea51;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: opacity 0.3s ease; }

.scroll-top-button.show-scroll-button {
  display: block;  }

.scroll-top-button i {
  font-size: 20px;
}
</style>