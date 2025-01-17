<script setup lang="ts">
import { ref, onMounted } from "vue";

// Structure des catégories qui correspond à ProductGrid
const categoryMapping = {
  'Produits beautés': 'beauty',
  'Parfums': 'fragrances',
  'Maison': 'furniture',
  'Consommables': 'groceries'
}

interface FavouriteCategory {
  img: string;
  title: string;
  to: string;
}

interface Content {
  favoritecategory: FavouriteCategory[];
}

const content = ref<Content>({
  favoritecategory: []
});

onMounted(async () => {
  const data = await queryContent('/main').findOne();
  if (data && Array.isArray(data.favoritecategory)) {
    content.value.favoritecategory = data.favoritecategory;
  } else {
    console.error("Aucun résultat pour favouritecategory");
  }
});

// Fonction pour obtenir l'URL de redirection selon le titre
const getCategoryUrl = (title: string) => {
  const category = categoryMapping[title];
  return `/ProductGrid?category=${category}`;
}
</script>

<template>
  <div class="space-y-4">
    <h1>Les catégories vedettes</h1>
    <UPageGrid class="flex flex-wrap h-min">
      <ULandingCard
          v-for="category in content.favoritecategory"
          :key="category.title"          class="flex-1"
          :to="getCategoryUrl(category.title)"
      >
        <img
            :src="category.img"
            :alt="category.title"
            class="h-48 justify-center"
        />
        <h1 class="font-semibold">{{ category.title }}</h1>
      </ULandingCard>
    </UPageGrid>
  </div>
</template>