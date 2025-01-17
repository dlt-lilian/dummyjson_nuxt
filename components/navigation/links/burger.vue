<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/store/main.js'
import { computed } from 'vue'

// Définition des catégories avec leurs labels et icônes
const categories = {
  beauty: { label: 'Produits beautés', icon: 'heroicons:heart' },
  fragrances: { label: 'Parfums', icon: 'heroicons:beaker' },
  furniture: { label: 'Maison', icon: 'heroicons:home' },
  groceries: { label: 'Consommables', icon: 'heroicons:shopping-cart' }
}

// Génération des liens du menu
const links = [
  {
    label: 'Tous les produits',
    to: '/ProductGrid',
    icon: 'i-heroicons:square-3-stack-3d',
    children: [
      ...Object.entries(categories).map(([category, { label, icon }]) => ({
        label,
        to: `/ProductGrid?category=${category}`,  // Ajout du paramètre de requête
        icon,
      })),
      {
        label: 'Page test',
        to: '/test',
        icon: 'i-heroicons:bug-ant',
      }
    ]
  }
]

const ui = {
  wrapper: 'flex items-center gap-x-8',
  base: 'text-sm/6 font-normal flex items-center gap-1 text-gray-500',
  active: 'text-primary ',
  inactive: 'hover:text-primary',
  trailingIcon: {
    name: 'i-heroicons-chevron-down-20-solid',
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: 'i-heroicons-arrow-up-right-20-solid',
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500',
  },
  default: {
    popover: {
      mode: 'hover',
      openDelay: 0,
      ui: {
        width: 'max-w-[16rem]',
        base:'text-gray-500',
        inactive: 'hover:text-primary',
      }
    }
  }
}
</script>

<template>
  <UHeaderLinks
      :ui="ui"
      :links="links"
      class="border border-gray-300 rounded-md px-2"
  />
</template>