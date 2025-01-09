<script setup lang="ts">
const modules = [{
  title: 'title',
  img: 'https://picsum.photos/300/200'
}, {
  title: 'title',
  img: 'https://picsum.photos/300/200'
}, {
  title: 'title',
  img: 'https://picsum.photos/300/200'
}, {
  title: 'title',
  img: 'https://picsum.photos/300/200'
}]
</script>

<template>
  <div class="space-y-4">
  <h1>Les catégories vedettes</h1>
  <UPageGrid class="flex flex-wrap">
    <div v-for="(module, index) in modules" :key="index" class="flex-1">
      <img :src="module.img" alt="Image" class="rounded-md"/>
      <h1 class="font-semibold">{{ module.title }}</h1>
    </div>
  </UPageGrid>
  </div>
</template>
