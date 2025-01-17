<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Définition du type pour les modules de `landingcard`
interface LandingCard {
  title: string;
  description: string;
  to: string;
  icon: string;
}

// Variable pour stocker les modules
const content = ref<{ landingcard: LandingCard[] }>({ landingcard: [] })

// Récupérer les données de la page
onMounted(async () => {
  // Utilisation de `queryContent` pour obtenir le contenu
  const data = await queryContent('/main').findOne()
  content.value = data
})

const ui = {
  wrapper: 'relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow',
  to: 'hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200',
  base: 'flex-1 flex flex-col overflow-hidden',
  container: '',
  body: {
    base: 'gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col'
  },
  background: 'bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]',
  ring: '',
  rounded: 'rounded-xl',
  shadow: '',
  icon: {
    wrapper: 'mb-2 pointer-events-none',
    base: 'w-8 h-8 flex-shrink-0 text-gray-800 dark:text-gray-200'
  },
  title: 'text-gray-800 dark:text-gray-200 text-base font-bold truncate',
  description: 'text-[15px] text-gray-500 dark:text-gray-400 mt-1'
}
</script>

<template>
  <UPageGrid class="flex flex-wrap">
  <ULandingCard
        v-for="(module, index) in content.landingcard"
        :ui="ui"
        :key="index"
        :title="module.title"
        :description="module.description"
        :to="module.to"
        :icon="module.icon"
        class="flex-1"
        target="_blank"
    >
      <!-- Description ici, si nécessaire -->
      <template #description>
        <span class="line-clamp-2">{{ module.description }}</span>
      </template>
    </ULandingCard>
  </UPageGrid>
</template>
