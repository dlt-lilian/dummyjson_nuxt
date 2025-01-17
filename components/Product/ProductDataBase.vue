<script setup lang="ts">
const { data } = await useFetch('/api/Product')
</script>

<template>
  <pre>{{ data.product.title}}</pre>
</template>
