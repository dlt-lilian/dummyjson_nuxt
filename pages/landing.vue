<template>
  <div class="mx-64 my-10 space-y-16">
    <carousel/>

    <header class="space-y-16">
      <card_1/>
      <list_produits_1/>
    </header>
    <pub/>
  </div>
</template>
<script setup lang="ts">

import Pub from "~/components/feature/pub.vue";

const content = await queryContent('/main').findOne()

import Carousel from "~/components/feature/carousel.vue";
import Card_1 from "~/components/feature/card_1.vue";
import List_produits_1 from "~/components/feature/category.vue";



</script>
