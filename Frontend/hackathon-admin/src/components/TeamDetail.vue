

 <template>
  <div>
    <button class="button-view" @click="fetchGroups">{{ $t('buttons.showGroups') }}</button>
    <button class="clear-button" @click="showModal = true">{{$t('buttons.deleteAll')}}</button>

    <div v-if="groups.length">
      <br>
      <h4>{{ $t('buttons.revision_P1') }}</h4>
      <h4>{{ $t('buttons.revision_P2') }}</h4>
      <br>
      <button class="button-view" @click="downloadCSV">{{ $t('buttons.downloadGroups') }}</button>

      <div v-for="(group, groupIndex) in filteredGroupsByCard" :key="groupIndex">
        <VaCard class="mb-8 border-b-2">
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
      </div>

      <VaAlert v-if="filteredCount !== null" class="!mt-6" color="info" outline>
        Number of filtered items:
        <VaChip>{{ filteredCount }}</VaChip>
      </VaAlert>
    </div>

    <ConfirmationModal
      :visible="showModal"
      :title="$t('modals.confirmDeleteTitle')"
      :message="$t('modals.confirmDeleteMessage')"
      @confirm="clearTable"
      @cancel="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { VaInput, VaSelect, VaDataTable, VaAlert, VaChip, VaCard } from 'vuestic-ui';
import { useI18n } from 'vue-i18n';
import ConfirmationModal from './ConfirmationModal.vue';

const { t } = useI18n();

const groups = ref([]);
const filter = ref("");
const filterByFields = ref([]);
const filteredCount = ref(null);
const showModal = ref(false);

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

const clearTable = async () => {
  try {
    const response = await axios.delete('http://localhost:4000/api/clear');
    /* alert(response.data.message); */
    location.reload();
  } catch (error) {
    console.error('Error clearing table:', error);
    alert('There was an error clearing the table.');
  } finally {
    showModal.value = false;
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
  /* { key: "groupIndex", label: "table.group" }, */
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

.button-view:hover {
  background-color: #a3a8a4;
  color: rgb(17, 17, 17);
}

.clear-button {
  background-color: #f44336;
  border: none;
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
}

.clear-button:hover {
  background-color: #941108;
  color: rgb(255, 255, 255);
}

.group-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.va-select-wrapper {
  position: relative; /* Set relative position */
  z-index: 1; /* Ensure VaSelect is at a higher level */
  overflow: visible; /* Allow VaSelect to deploy outside of its container */
}

.custom-header {
  font-size: 2.5rem; /* Adjust the font size as needed */
  font-weight: bold; /* Optional: to make the text bold */
}

/* Media Queries */
@media (max-width: 1024px) {
  .button-view,
  .clear-button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .group-title {
    font-size: 1rem;
  }

  .custom-header {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .button-view,
  .clear-button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .group-title {
    font-size: 0.875rem;
  }

  .custom-header {
    font-size: 1.25rem;
  }
}

@media (max-width: 500px) {
  .button-view,
  .clear-button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  .group-title {
    font-size: 0.75rem;
  }

  .custom-header {
    font-size: 1rem;
  }
}
</style>
