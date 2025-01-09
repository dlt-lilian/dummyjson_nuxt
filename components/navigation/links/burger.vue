<!--Manque les icons -->

<script setup lang="ts">
const links = [ {
  icon: 'i-heroicons:cube',
  to: '/landing'
},
    {
  label: 'Menu',
  to: '/landing',
  icon: 'i-heroicons-square-3-stack-3d',
  children: [{
    label: 'Tous les produits',
    to: '/ProductGrid',
    icon: 'i-heroicons-ticket',
  }, {
    label: 'Page test',
    to: '/test',
    icon: 'i-heroicons-computer-desktop',
  }]
}]
</script>

<template>
  <UHeaderLinks :links="links" />
</template>

