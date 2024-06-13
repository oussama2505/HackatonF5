<template>
    <button @click="scrollToTop" class="scroll-top-button" :class="{ 'show-scroll-button': showScrollButton }" title="Go to top">
          <font-awesome-icon icon="arrow-up" class="fa-2x"/>
    </button>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const showScrollButton = ref(false);
// Scroll up function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
// Function that shows or hides the back to top button depending on the scroll position
const handleScroll = () => {
  if (window.scrollY > 300) { // Change 300 to the desired position to display the button
    showScrollButton.value = true;
  } else {
    showScrollButton.value = false;
  }
};

// Add a listener for the scroll event when mounting the component
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove the listener when the component is unmounted
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