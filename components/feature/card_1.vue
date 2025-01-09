<script setup lang="ts">
const modules = [{
  title: 'Réparation',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
  to: '#',
  icon: 'i-heroicons:wrench-screwdriver'
}, {
  title: 'Remplacement',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
  to: '#',
  icon: 'i-heroicons:arrow-path'
}, {
  title: 'Aide',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
  to: '#',
  icon: 'i-heroicons:chat-bubble-oval-left-ellipsis'
}, {
  title: 'Garantie',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
  to: '#',
  icon: 'i-heroicons:check-badge'
},
]
</script>

<template>
  <UPageGrid class="flex flex-wrap">
    <UPageCard v-for="(module, index) in modules" :key="index" v-bind="module" class="flex-1" target="_blank">
      <template #description>
        <span class="line-clamp-2">{{ module.description }}</span>
      </template>
    </UPageCard>
  </UPageGrid>
</template>
