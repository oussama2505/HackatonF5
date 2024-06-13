<template>
    <div v-if="visible" class="modal">
      <div class="modal-content">
        <!-- <h3>{{ title }}</h3> -->
        <p>{{ message }}</p>
        <div class="modal-buttons">
          <button @click="confirm">{{ $t('buttons.yes') }}</button>
          <button @click="cancel">{{ $t('buttons.no') }}</button>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';

  const props = defineProps({
    visible: Boolean,
    title: String,
    message: String,
  });

  const emit = defineEmits(['confirm', 'cancel']);

  const confirm = () => emit('confirm');
  const cancel = () => emit('cancel');
  </script>

  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal-buttons button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 8rem;
    height: 3rem;
  }

  .modal-buttons button:first-child {
    background-color: #f44336;
    color: white;
  }

  .modal-buttons button:last-child {
    background-color: #ccc;
  }

  .modal-buttons{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>