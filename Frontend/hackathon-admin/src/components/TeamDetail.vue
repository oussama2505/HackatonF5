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
        />
      </div> -->

      <div v-for="(group, groupIndex) in filteredGroupsByCard" :key="groupIndex">
        <VaCard class="mb-4 border-b-2">
          <h3 class="group-title">Grupo {{ groupIndex + 1 }}</h3>
          <VaDataTable class="bg-light-beige text-l mb-12"
            v-if="group.length"
            :items="group"
            :columns="translatedColumns"
            :filter="filter"
            :filter-method="customFilteringFn"
            :header-class="'custom-header'"
            @filtered="filteredCount = $event.items.length"
          />
        </VaCard>
        <button @click="scrollToTop" class="scroll-top-button" :class="{ 'show-scroll-button': showScrollButton }" title="Go to top">
          <font-awesome-icon icon="arrow-up" class="fa-2x"/>
        </button>
      </div>

      <VaAlert v-if="filteredCount !== null" class="!mt-6" color="info" outline>
        Number of filtered items:
        <VaChip>{{ filteredCount }}</VaChip>
      </VaAlert>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';
import { VaInput, VaSelect, VaDataTable, VaAlert, VaChip, VaCard } from 'vuestic-ui';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const groups = ref([]);
const filter = ref("");
const filterByFields = ref([]);
const filteredCount = ref(null);
const showScrollButton = ref(false);

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
  { value: "nombre", text: t("table.name") },
  { value: "apellido", text: t("table.surname") },
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
  return Object.values(source).some(value => filterRegex.test(value));
};
</script>

<style scoped>
.grid {
  display: grid;
}
.button-view {
  background-color: #03bd3e; 
  border: none;
  color: rgb(255, 255, 255);
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  margin: 0.25rem 0.125rem;
  cursor: pointer;
  border-radius: 0.25rem;
}
.button-view:hover{
  background-color: #a3a8a4; 
  color: rgb(17, 17, 17);
}
.group-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.va-select-wrapper {
  position: relative; /* Establecer posición relativa */
  z-index: 1; /* Asegurar que el VaSelect esté en un nivel superior */
  overflow: visible; /* Permitir que el VaSelect despliegue fuera de su contenedor */
}
.custom-header {
  font-size: 2.5rem; /* Adjust the font size as needed */
  font-weight: bold; /* Optional: to make the text bold */
}

.scroll-top-button {
  display: none; /* Inicialmente oculto */
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
  transition: opacity 0.3s ease; /* Añade una transición suave */
}

.scroll-top-button.show-scroll-button {
  display: block; /* Muestra el botón cuando showScrollButton es verdadero */
}

.scroll-top-button i {
  font-size: 20px;
}

</style>
