<!-- TeamsList.vue -->
<template>
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Hackathon Participants</h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="(participant, index) in participants" :key="index" class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {{ participant['nombre']}}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ participant['apellido']}}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Frontend Level: {{ participant['front'] }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Backend Level: {{ participant['back'] }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Correo: {{ participant['email'] }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Bootcamp: {{ participant['bootcamp'] }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TeamsList',
    props: {
      participants: {
        type: Array,
        required: true,
      },
    },
  });
  </script>
  