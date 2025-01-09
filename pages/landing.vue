<template>
  <div>
    <carousel/>
    <header class="mx-64 my-10 space-y-10">
      <card_1/>
      <list_produits_1/>
    </header>
  </div>
</template>
<script setup lang="ts">
import Carousel from "~/components/feature/carousel.vue";
import Card_1 from "~/components/feature/card_1.vue";
import List_produits_1 from "~/components/feature/list_produits_1.vue";
</script>