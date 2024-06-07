<template>
  <div class="containerGral">
    <button class="button-view" @click="fetchGroups">{{ $t('ShowGroups') }}</button>
    <div v-if="groups.length">
      <div class="container">
        <div v-for="(group, groupIndex) in groups" :key="groupIndex" class="card-grid">
          <h4>{{ $t('Group') }} {{ groupIndex + 1 }}</h4>
          <div class="card" v-for="(person, personIndex) in group" :key="personIndex">
            <div class="grid-container">
              <div class="grid-item"><p><b><em>{{ $t('groups.name') }}:</em></b></p> {{ person.nombre }}</div>
              <div class="grid-item"><p><b><em>{{ $t('groups.email') }}: </em></b></p>{{ person.email }}</div>
              <div class="grid-item"><p><b><em>{{ $t('groups.front') }}: </em></b></p>{{ person.front }}</div>
              <div class="grid-item"><p><b><em>{{ $t('groups.back') }}:</em></b></p> {{ person.back }}</div>
              <div class="grid-item"><p><b><em>{{ $t('groups.bootcamp') }}:</em> </b></p>{{ person.bootcamp }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const groups = ref([]);

    const fetchGroups = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/grupos');
        groups.value = response.data;
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    return {
      groups,
      fetchGroups
    };
  }
};
</script>

  
<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 2rem;
  height: 100vw;
  width: auto;
  padding-bottom:4rem ;
}
.card-grid {
  width: 48%;
  border: 0.1rem solid black;
  border-radius: 1rem;
  opacity: 0.5;
  padding: 1rem;
  margin-bottom: 2rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.card {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

}
.grid-item {
  text-align: center;
}

.button-view{
  background-color: #09ea51; 
    border: none;
    color: white;
    padding: 0.625rem 1.25rem;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0.25rem 0.125rem;
    cursor: pointer;
    border-radius: 0.25rem;
}
</style>
