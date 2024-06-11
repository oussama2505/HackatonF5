<template>
  <div>
    <button class="button-view" @click="fetchGroups">{{ $t('buttons.showGroups') }}</button>

    <div v-if="groups.length">
      <br>
      <h4>{{ $t('buttons.revision_P1') }}</h4>
      <h4>{{ $t('buttons.revision_P2') }}</h4>
      <br>
      <button class="button-view" @click="downloadCSV">{{ $t('buttons.downloadGroups') }}</button>

      <!-- <div class="bg-blue grid md:grid-cols-2 gap-6 mb-6">
        <VaInput v-model="filter" placeholder="Filter..." class="w-full" />
        <VaSelect
          v-model="filterByFields"
          placeholder="Select filter fields"
          :options="columnsWithName"
          value-by="value"
          multiple
          :style="{ 'z-index': '999'}"
        />
      </div> -->

      <div v-for="(group, groupIndex) in filteredGroupsByCard" :key="groupIndex">
        <VaCard class="mb-4 border-b-2">
          <h3 class="group-title">Grupo {{ groupIndex + 1 }}</h3>
          <VaDataTable
            v-if="group.length"
            :items="group"
            :columns="translatedColumns"
            :filter="filter"
            :filter-method="customFilteringFn"
            @filtered="filteredCount = $event.items.length"
          />
        </VaCard>
      </div>

      <VaAlert v-if="filteredCount !== null" class="!mt-6" color="info" outline>
        Number of filtered items:
        <VaChip>{{ filteredCount }}</VaChip>
      </VaAlert>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { VaInput, VaSelect, VaDataTable, VaAlert, VaChip, VaCard } from 'vuestic-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const groups = ref([]);
const filter = ref("");
const filterByFields = ref([]);
const filteredCount = ref(null);

const fetchGroups = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/grupos');
    groups.value = response.data;
  } catch (error) {
    console.error('Error fetching groups:', error);
  }
};

const downloadCSV = async () => {
  try {
    let csvContent = 'data:text/csv;charset=utf-8,';
    groups.value.forEach((group, groupIndex) => {
      csvContent += `Grupo ${groupIndex + 1}\n`;
      csvContent += 'Nombre,Apellido,Email,Front,Back,Bootcamp\n';
      group.forEach(person => {
        csvContent += `${person.nombre},${person.apellido},${person.email},${person.front},${person.back},${person.bootcamp}\n`;
      });
      csvContent += '\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'grupos.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error al descargar el archivo CSV:', error);
  }
};

const flattenedGroups = computed(() => {
  return groups.value.flatMap((group, groupIndex) => {
    return group.map(person => ({ ...person, groupIndex: groupIndex + 1 }));
  });
});

const filteredGroupsByCard = computed(() => {
  return groups.value.map(group => {
    return group.filter(person => customFilteringFn(person, { column: { key: filterByFields.value.join() }}));
  });
});

const columns = [
  { key: "groupIndex", label: "table.group" },
  { key: "nombre", label: "table.name" },
  { key: "apellido", label: "table.surname" },
  { key: "email", label: "table.email" },
  { key: "front", label: "table.front" },
  { key: "back", label: "table.back" },
  { key: "bootcamp", label: "table.bootcamp" }
];

const translatedColumns = computed(() => {
  return columns.map(column => ({
    ...column,
    label: t(column.label)
  }));
});

const columnsWithName = [
  { value: "groupIndex", text: t("table.group") },
  { value: "nombre", text: t("table.nombre") },
  { value: "apellido", text: t("table.apellido") },
  { value: "email", text: t("table.email") },
  { value: "front", text: t("table.front") },
  { value: "back", text: t("table.back") },
  { value: "bootcamp", text: t("table.bootcamp") }
];

const customFilteringFn = (source, cellData) => {
  if (!filter.value) {
    return true;
  }
  if (filterByFields.value.length >= 1) {
    const searchInCurrentRow = filterByFields.value.some(
      (field) => cellData.column.key === field
    );
    if (!searchInCurrentRow) return false;
  }
  const filterRegex = new RegExp(filter.value, "i");
  return filterRegex.test(source);
};
</script>

<style scoped>
.grid {
  display: grid;
}
.button-view {
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
  margin-bottom: 2rem;
  cursor: pointer;
  border-radius: 0.25rem;
}
.group-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.va-select-wrapper {
  position: relative; 
  z-index: 1; 
  overflow: visible; 
}
</style>
